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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const boutique_entity_1 = require("../../boutique/entities/boutique.entity");
const commentaire_entity_1 = require("../../commentaire/entities/commentaire.entity");
const commande_entity_1 = require("../../commande/entities/commande.entity");
const listefavoris_entity_1 = require("../../listefavoris/entities/listefavoris.entity");
const Timestamp_entities_1 = require("../../../Saheelha-NestJs/src/Generics/Timestamp.entities");
const user_type_enum_1 = require("../../../Saheelha-NestJs/src/enums/user.type.enum");
let UserEntity = class UserEntity extends Timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "nom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "prenom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserEntity.prototype, "numtel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "adresse", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: user_type_enum_1.UserTypeEnum, default: user_type_enum_1.UserTypeEnum.USER }),
    __metadata("design:type", String)
], UserEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    typeorm_1.Column({
        unique: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "mail", void 0);
__decorate([
    typeorm_1.Column({
        name: 'mot de passe',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany((type) => boutique_entity_1.BoutiqueEntity, (boutique) => boutique.user, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "boutiques", void 0);
__decorate([
    typeorm_1.OneToMany((type) => commentaire_entity_1.CommentaireEntity, (commentaire) => commentaire.user, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "commentaires", void 0);
__decorate([
    typeorm_1.OneToMany((type) => commande_entity_1.CommandeEntity, (commande) => commande.user, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "commandes", void 0);
__decorate([
    typeorm_1.OneToOne((type) => listefavoris_entity_1.ListefavorisEntity, (listefavoris) => listefavoris.user, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "listefavoris", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map