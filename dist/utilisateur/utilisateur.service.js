"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../mail/mail.service");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
let UtilisateurService = class UtilisateurService {
    constructor(configService, mailService, userRepository, jwtservice) {
        this.configService = configService;
        this.mailService = mailService;
        this.userRepository = userRepository;
        this.jwtservice = jwtservice;
    }
    async getUsers() {
        return await this.userRepository.find();
    }
    async addCv(userData) {
        const user = this.userRepository.create(Object.assign({}, userData));
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.userRepository.save(user);
        }
        catch (e) {
            throw new common_1.ConflictException(`le username et le password doivent etre unique`);
        }
        return user;
    }
    async findById(id) {
        const utilisateur = await this.userRepository.findOne(id);
        if (!utilisateur) {
            throw new common_1.NotFoundException(`l'utilisateur d'id ${id} n'existe pas`);
        }
        return utilisateur;
    }
    async updateCv(id, user) {
        const newUser = await this.userRepository.preload(Object.assign({ id }, user));
        if (!newUser) {
            throw new common_1.NotFoundException(`le cv d'id ${id} n'existe pas`);
        }
        newUser.salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(newUser.password, newUser.salt);
        return await this.userRepository.save(newUser);
    }
    async softDeleteUser(id) {
        const cv = await this.userRepository.findOne(id);
        if (!cv) {
            throw new common_1.NotFoundException(`le cv d'id ${id} n'existe pas`);
        }
        return await this.userRepository.softRemove(cv);
    }
    async restoreUtilisateur(id) {
        this.userRepository.restore(id);
    }
    async login(credentials) {
        const { mail, password } = credentials;
        const user = await this.userRepository
            .createQueryBuilder('user')
            .where('user.mail = :mail', { mail })
            .getOne();
        if (!user)
            throw new common_1.NotFoundException('username ou password éronnée');
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {
            const payload = {
                mail: user.mail,
                type: user.type,
            };
            const jwt = await this.jwtservice.sign(payload);
            return {
                access_token: jwt,
            };
        }
        else {
            throw new common_1.NotFoundException('username ou password éronné');
        }
    }
    async ChangePassword(id, forgotPassword) {
        const hashedPassword = await bcrypt.hash(forgotPassword);
        const newUser = await this.userRepository.preload(Object.assign({ id }, hashedPassword));
        if (!newUser) {
            throw new common_1.NotFoundException(`le cv d'id ${id} n'existe pas`);
        }
        return await this.userRepository.save(newUser);
    }
    async forgotPassword(forgotPassword) {
        const { mail } = forgotPassword;
        const utilisateur = await this.userRepository
            .createQueryBuilder('user')
            .where('user.mail = :mail', { mail })
            .getOne();
        const confirmLink = process.env.Mail + `/resetPassword/${utilisateur.id}`;
        nodemailer.createTestAccount((err, account) => {
            if (err) {
                console.log(err);
            }
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'amir.akari@esprit.tn',
                    pass: '183JMT1875',
                },
            });
            const message = {
                from: 'Zéro Gaspii <amir.akari@esprit.tn>',
                to: utilisateur.mail,
                subject: 'Réinitialiser votre mot de passe',
                html: `
        <html>
        <body>
        <h3>Bonjour ${utilisateur.nom}</h3>
        <p>s'il vous plaît utilisez  <a href="${confirmLink}">ce lien</a> pour réinitialiser votre mot de passe</p>
        </body>
        </html>`,
            };
            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                }
            });
        });
    }
    async envoiemail() {
        const type = 'user';
        const qb = await typeorm_1.getConnection()
            .createQueryBuilder()
            .select('user.mail', 'mail')
            .from(user_entity_1.UserEntity, 'user')
            .where('user.type = :type', { type })
            .getRawMany();
        for (let i = 0; i < qb.length; i++) {
            console.log(qb[i].mail);
            nodemailer.createTestAccount((err, account) => {
                if (err) {
                    console.log(err);
                }
                const transporter = nodemailer.createTransport({
                    host: 'smtp.sendgrid.net',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'apikey',
                        pass: process.env.SENDGRID_API_KEY,
                    },
                });
                const message = {
                    from: 'Zéro Gaspii <amir.akari@esprit.tn>',
                    to: qb[i].mail,
                    subject: 'Réinitialiser votre mot de passe',
                    html: `
        <html>
        <body>
        <h3>le magasin aziza</h3>
        <p>s'il vous plaît utilisez  pour réinitialiser votre mot de passe</p>
        </body>
        </html>`,
                };
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.log('Error occurred. ' + err.message);
                    }
                });
            });
        }
    }
};
UtilisateurService = __decorate([
    common_1.Injectable(),
    __param(2, typeorm_2.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        mail_service_1.MailService,
        typeorm_1.Repository,
        jwt_1.JwtService])
], UtilisateurService);
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=utilisateur.service.js.map