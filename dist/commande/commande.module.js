"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandeModule = void 0;
const common_1 = require("@nestjs/common");
const commande_controller_1 = require("./commande.controller");
const commande_service_1 = require("./commande.service");
const typeorm_1 = require("@nestjs/typeorm");
const commande_entity_1 = require("./entities/commande.entity");
const produit_entity_1 = require("../produit/entities/produit.entity");
const panier_entity_1 = require("../listefavoris/entities/panier.entity");
const produit_service_1 = require("../produit/produit.service");
let CommandeModule = class CommandeModule {
};
CommandeModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([commande_entity_1.CommandeEntity, produit_entity_1.ProduitEntity, panier_entity_1.PanierEntity]),
        ],
        controllers: [commande_controller_1.CommandeController],
        providers: [commande_service_1.CommandeService, produit_service_1.ProduitService],
    })
], CommandeModule);
exports.CommandeModule = CommandeModule;
//# sourceMappingURL=commande.module.js.map