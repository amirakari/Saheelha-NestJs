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
exports.ProduitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produit_entity_1 = require("./entities/produit.entity");
const typeorm_2 = require("typeorm");
const panier_entity_1 = require("../listefavoris/entities/panier.entity");
const nodemailer = require("nodemailer");
const user_entity_1 = require("../utilisateur/entities/user.entity");
const dotenv = require("dotenv");
dotenv.config();
let ProduitService = class ProduitService {
    constructor(PanierRepository, userRepository) {
        this.PanierRepository = PanierRepository;
        this.userRepository = userRepository;
        this.confirmLink = '';
    }
    async getUsers() {
        return this.userRepository.find({
            where: [
                {
                    DLC: typeorm_2.Raw((alias) => `${alias} > NOW()`),
                    quantite: typeorm_2.Raw((alias) => `${alias} > 0`),
                },
            ],
        });
    }
    async getProduitParBoutique(id) {
        const status = 'à vendre';
        const qb = this.userRepository
            .createQueryBuilder('produit')
            .where('produit.boutique.id = :id', { id })
            .andWhere('produit.status = :status', { status })
            .andWhere('produit.DLC > Now()')
            .andWhere('produit.quantite > 0')
            .getMany();
        return qb;
    }
    async getProduitParBoutiqueDon(id) {
        const status = 'à donner';
        const qb = this.userRepository
            .createQueryBuilder('produit')
            .where('produit.boutique.id = :id', { id })
            .andWhere('produit.status = :status', { status })
            .andWhere('produit.DLC > Now()')
            .andWhere('produit.quantite > 0')
            .getMany();
        return qb;
    }
    async rechercheParLocalisation(adresse) {
        const qb = this.userRepository
            .createQueryBuilder('produit')
            .leftJoin('produit.boutique', 'boutique')
            .where('boutique.adresse = :adresse', { adresse })
            .andWhere('produit.DLC > Now()')
            .getMany();
        return qb;
    }
    async rechercheParNom(nom) {
        return this.userRepository.find({
            where: [
                {
                    nom: typeorm_2.Like(`%${nom}%`),
                    DLC: typeorm_2.Raw((alias) => `${alias} > NOW()`),
                },
            ],
        });
    }
    async recherchePartype(type) {
        return this.userRepository.find({
            where: [
                {
                    categorie: typeorm_2.Like(`%${type}%`),
                    DLC: typeorm_2.Raw((alias) => `${alias} > NOW()`),
                },
            ],
        });
    }
    async rechercheParStatus(status) {
        return this.userRepository.find({
            where: [
                {
                    status: typeorm_2.Like(`%${status}%`),
                    DLC: typeorm_2.Raw((alias) => `${alias} > NOW()`),
                },
            ],
        });
    }
    async addCv(user, codeabare, boutique) {
        const newBoutique = this.userRepository.create(user);
        newBoutique.codeabare = codeabare;
        newBoutique.boutique = boutique;
        const code = newBoutique.codeabare.toString();
        const now = new Date();
        if (newBoutique.status === 'à vendre') {
            this.confirmLink =
                process.env.Mail +
                    `/boutique/${newBoutique.boutique.id}/produitboutique`;
        }
        else {
            this.confirmLink =
                process.env.Mail +
                    `/boutique/${newBoutique.boutique.id}/produitboutique/don`;
        }
        if (newBoutique.status === 'à vendre' &&
            code.length == 13 &&
            newBoutique.prixavecremise < newBoutique.prixsansremise) {
            const type = 'user';
            const qb = await typeorm_2.getConnection()
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
                        host: 'smtp.gmail.com',
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'apikey',
                            pass: process.env.SENDGRID_API_KEY,
                        },
                    });
                    const message = {
                        from: 'Zéro Gaspii <amir.akari@esprit.tn>',
                        to: qb[i].mail,
                        subject: 'Un nouveau produit est ajouté dans notre plateforme Zéro Gaspii',
                        html: `
        <html>
        <body>
        
        <h3>le ${newBoutique.boutique.domaine} ${newBoutique.boutique.nom} a ajouté un nouveau produit</h3>
        <p>Vous pouvez trouver le produit ${newBoutique.nom} sur <a href="${this.confirmLink}">ce lien</a> 
        </p>
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
            return await this.userRepository.save(newBoutique);
        }
        if (newBoutique.status === 'à donner' && code.length == 13) {
            const type = 'user';
            const qb = await typeorm_2.getConnection()
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
                        host: 'smtp.gmail.com',
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'apikey',
                            pass: process.env.SENDGRID_API_KEY,
                        },
                    });
                    const message = {
                        from: 'Zéro Gaspii <amir.akari@esprit.tn>',
                        to: qb[i].mail,
                        subject: 'Un nouveau produit est ajouté dans notre plateforme Zéro Gaspii',
                        html: `
        <html>
        <body>
        <h3>le ${newBoutique.boutique.domaine} ${newBoutique.boutique.nom} a ajouté un nouveau produit</h3>
        <p>Vous pouvez trouver le produit ${newBoutique.nom} sur<a href="${this.confirmLink}">ce lien</a> </p>
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
            return await this.userRepository.save(newBoutique);
        }
        else {
            console.log(newBoutique.DLC);
            console.log(now);
            throw new common_1.NotFoundException(`l'utilisateur d'id  n'existe pas`);
        }
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
        return await this.userRepository.save(newUser);
    }
    async findByPanierId(id) {
        const qb = this.userRepository
            .createQueryBuilder('produit')
            .leftJoin('produit.panier', 'panier')
            .where('produit.panier.id = :id', { id })
            .getMany();
        return qb;
    }
    async softDeleteUser(id) {
        return this.userRepository.softDelete(id);
    }
    async restoreUtilisateur(id) {
        this.userRepository.restore(id);
    }
};
ProduitService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(panier_entity_1.PanierEntity)),
    __param(1, typeorm_1.InjectRepository(produit_entity_1.ProduitEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProduitService);
exports.ProduitService = ProduitService;
//# sourceMappingURL=produit.service.js.map