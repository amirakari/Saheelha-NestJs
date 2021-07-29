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
const commentaire_module_1 = require("./commentaire/commentaire.module");
const listefavoris_module_1 = require("./listefavoris/listefavoris.module");
const dotenv = require("dotenv");
const user_entity_1 = require("./utilisateur/entities/user.entity");
const abonnement_entity_1 = require("./abonnement/entities/abonnement.entity");
const boutique_entity_1 = require("./boutique/entities/boutique.entity");
const commande_entity_1 = require("./commande/entities/commande.entity");
const commentaire_entity_1 = require("./commentaire/entities/commentaire.entity");
const produit_entity_1 = require("./produit/entities/produit.entity");
const evaluationproduit_entity_1 = require("./evaluationproduit/entities/evaluationproduit.entity");
const panier_entity_1 = require("./listefavoris/entities/panier.entity");
const evaluationproduit_module_1 = require("./evaluationproduit/evaluationproduit.module");
const google_strategy_1 = require("./google.strategy");
const first_middleware_1 = require("./middlewares/first.middleware");
const mail_module_1 = require("./mail/mail.module");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(first_middleware_1.FirstMiddleware).forRoutes('');
    }
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
                entities: [
                    user_entity_1.UserEntity,
                    abonnement_entity_1.AbonnementEntity,
                    boutique_entity_1.BoutiqueEntity,
                    commande_entity_1.CommandeEntity,
                    commentaire_entity_1.CommentaireEntity,
                    produit_entity_1.ProduitEntity,
                    evaluationproduit_entity_1.EvaluationproduitEntity,
                    panier_entity_1.PanierEntity,
                ],
                synchronize: false,
            }),
            utilisateur_module_1.UtilisateurModule,
            boutique_module_1.BoutiqueModule,
            produit_module_1.ProduitModule,
            abonnement_module_1.AbonnementModule,
            commande_module_1.CommandeModule,
            commentaire_module_1.CommentaireModule,
            listefavoris_module_1.ListefavorisModule,
            evaluationproduit_module_1.EvaluationproduitModule,
            mail_module_1.MailModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, google_strategy_1.GoogleStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map