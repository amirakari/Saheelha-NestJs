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
exports.CommentaireEntity = void 0;
const typeorm_1 = require("typeorm");
const produit_entity_1 = require("../../produit/entities/produit.entity");
const user_entity_1 = require("../../utilisateur/entities/user.entity");
const Timestamp_entities_1 = require("../../Generics/Timestamp.entities");
let CommentaireEntity = class CommentaireEntity extends Timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommentaireEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommentaireEntity.prototype, "message", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentaireEntity.prototype, "nbrelike", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentaireEntity.prototype, "nbredislike", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentaireEntity.prototype, "nbreemojis", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => produit_entity_1.ProduitEntity, (produit) => produit.commentaires, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", produit_entity_1.ProduitEntity)
], CommentaireEntity.prototype, "produit", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.UserEntity, (user) => user.commentaires, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentaireEntity.prototype, "user", void 0);
CommentaireEntity = __decorate([
    typeorm_1.Entity('commentaire')
], CommentaireEntity);
exports.CommentaireEntity = CommentaireEntity;
//# sourceMappingURL=commentaire.entity.js.map