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
exports.ListefavorisEntity = void 0;
const typeorm_1 = require("typeorm");
const produit_entity_1 = require("../../produit/entities/produit.entity");
const user_entity_1 = require("../../utilisateur/entities/user.entity");
let ListefavorisEntity = class ListefavorisEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ListefavorisEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => produit_entity_1.ProduitEntity, (produit) => produit.listefavoris, {
        cascade: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], ListefavorisEntity.prototype, "produits", void 0);
__decorate([
    typeorm_1.OneToOne((type) => user_entity_1.UserEntity, (user) => user.listefavoris, {
        cascade: ['insert', 'update'],
        nullable: true,
    }),
    __metadata("design:type", Array)
], ListefavorisEntity.prototype, "user", void 0);
ListefavorisEntity = __decorate([
    typeorm_1.Entity('listefavoris')
], ListefavorisEntity);
exports.ListefavorisEntity = ListefavorisEntity;
//# sourceMappingURL=listefavoris.entity.js.map