"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitModule = void 0;
const common_1 = require("@nestjs/common");
const produit_controller_1 = require("./produit.controller");
const produit_service_1 = require("./produit.service");
const typeorm_1 = require("@nestjs/typeorm");
const produit_entity_1 = require("./entities/produit.entity");
let ProduitModule = class ProduitModule {
};
ProduitModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([produit_entity_1.ProduitEntity])],
        controllers: [produit_controller_1.ProduitController],
        providers: [produit_service_1.ProduitService],
    })
], ProduitModule);
exports.ProduitModule = ProduitModule;
//# sourceMappingURL=produit.module.js.map