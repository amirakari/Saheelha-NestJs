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
exports.PanierEntity = void 0;
const typeorm_1 = require("typeorm");
const produit_entity_1 = require("../../produit/entities/produit.entity");
const user_entity_1 = require("../../utilisateur/entities/user.entity");
const Timestamp_entities_1 = require("../../Generics/Timestamp.entities");
let PanierEntity = class PanierEntity extends Timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PanierEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => produit_entity_1.ProduitEntity, (produit) => produit.panier, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], PanierEntity.prototype, "produits", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.UserEntity, (user) => user.listefavoris, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], PanierEntity.prototype, "user", void 0);
PanierEntity = __decorate([
    typeorm_1.Entity('listefavoris')
], PanierEntity);
exports.PanierEntity = PanierEntity;
//# sourceMappingURL=listefavoris.entity.js.map