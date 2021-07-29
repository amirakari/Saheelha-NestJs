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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoutiqueEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../utilisateur/entities/user.entity");
const produit_entity_1 = require("../../produit/entities/produit.entity");
const abonnement_entity_1 = require("../../abonnement/entities/abonnement.entity");
let BoutiqueEntity = class BoutiqueEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BoutiqueEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "nom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "adresse", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "horaire", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "visite", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    typeorm_1.Column({
        unique: true,
    }),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "mailprofessionnelle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoutiqueEntity.prototype, "domaine", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.UserEntity, (user) => user.boutiques, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], BoutiqueEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany((type) => produit_entity_1.ProduitEntity, (produit) => produit.boutique, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], BoutiqueEntity.prototype, "produits", void 0);
__decorate([
    typeorm_1.OneToMany((type) => abonnement_entity_1.AbonnementEntity, (abonnement) => abonnement.boutique, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], BoutiqueEntity.prototype, "abonnements", void 0);
BoutiqueEntity = __decorate([
    typeorm_1.Entity('boutique')
], BoutiqueEntity);
exports.BoutiqueEntity = BoutiqueEntity;
//# sourceMappingURL=boutique.entity.js.map