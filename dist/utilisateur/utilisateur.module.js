"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurModule = void 0;
const common_1 = require("@nestjs/common");
const utilisateur_controller_1 = require("./utilisateur.controller");
const utilisateur_service_1 = require("./utilisateur.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const dotenv = require("dotenv");
const passport_jwt_strategy_1 = require("./strategy/passport-jwt.strategy");
const mail_service_1 = require("../mail/mail.service");
dotenv.config();
let UtilisateurModule = class UtilisateurModule {
};
UtilisateurModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET,
                signOptions: {
                    expiresIn: 10800,
                },
            }),
        ],
        controllers: [utilisateur_controller_1.UtilisateurController],
        providers: [utilisateur_service_1.UtilisateurService, passport_jwt_strategy_1.JwtStrategy, mail_service_1.MailService],
    })
], UtilisateurModule);
exports.UtilisateurModule = UtilisateurModule;
//# sourceMappingURL=utilisateur.module.js.map