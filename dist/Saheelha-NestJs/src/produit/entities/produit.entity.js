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
exports.ProduitEntity = void 0;
const typeorm_1 = require("typeorm");
const boutique_entity_1 = require("../../boutique/entities/boutique.entity");
const commentaire_entity_1 = require("../../commentaire/entities/commentaire.entity");
const evaluationproduit_entity_1 = require("../../evaluationproduit/entities/evaluationproduit.entity");
const commande_entity_1 = require("../../commande/entities/commande.entity");
const listefavoris_entity_1 = require("../../listefavoris/entities/listefavoris.entity");
let ProduitEntity = class ProduitEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProduitEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProduitEntity.prototype, "categorie", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProduitEntity.prototype, "DLC", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProduitEntity.prototype, "nom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProduitEntity.prototype, "codeabare", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProduitEntity.prototype, "prixsansremise", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProduitEntity.prototype, "prixavecremise", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    typeorm_1.Column({
        unique: true,
    }),
    __metadata("design:type", String)
], ProduitEntity.prototype, "reference", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => boutique_entity_1.BoutiqueEntity, (boutique) => boutique.produits, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", boutique_entity_1.BoutiqueEntity)
], ProduitEntity.prototype, "boutique", void 0);
__decorate([
    typeorm_1.OneToMany((type) => commentaire_entity_1.CommentaireEntity, (commentaire) => commentaire.produit, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], ProduitEntity.prototype, "commentaires", void 0);
__decorate([
    typeorm_1.OneToMany((type) => evaluationproduit_entity_1.EvaluationproduitEntity, (evaluationproduit) => evaluationproduit.produit, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], ProduitEntity.prototype, "evaluationsproduits", void 0);
__decorate([
    typeorm_1.OneToMany((type) => commande_entity_1.CommandeEntity, (commande) => commande.produit, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], ProduitEntity.prototype, "commandes", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => listefavoris_entity_1.ListefavorisEntity, (listefavoris) => listefavoris.produits, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", listefavoris_entity_1.ListefavorisEntity)
], ProduitEntity.prototype, "listefavoris", void 0);
ProduitEntity = __decorate([
    typeorm_1.Entity('produit')
], ProduitEntity);
exports.ProduitEntity = ProduitEntity;
//# sourceMappingURL=produit.entity.js.map