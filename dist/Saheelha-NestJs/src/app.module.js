"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const utilisateur_module_1 = require("./utilisateur/utilisateur.module");
const boutique_module_1 = require("./boutique/boutique.module");
const produit_module_1 = require("./produit/produit.module");
const abonnement_module_1 = require("./abonnement/abonnement.module");
const commande_module_1 = require("./commande/commande.module");
const evaluationproduit_module_1 = require("./evaluationproduit/evaluationproduit.module");
const commentaire_module_1 = require("./commentaire/commentaire.module");
const listefavoris_module_1 = require("./listefavoris/listefavoris.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            utilisateur_module_1.UtilisateurModule,
            boutique_module_1.BoutiqueModule,
            produit_module_1.ProduitModule,
            abonnement_module_1.AbonnementModule,
            commande_module_1.CommandeModule,
            evaluationproduit_module_1.EvaluationproduitModule,
            commentaire_module_1.CommentaireModule,
            listefavoris_module_1.ListefavorisModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map