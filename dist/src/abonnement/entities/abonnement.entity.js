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
exports.AbonnementEntity = void 0;
const typeorm_1 = require("typeorm");
const boutique_entity_1 = require("../../boutique/entities/boutique.entity");
let AbonnementEntity = class AbonnementEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AbonnementEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AbonnementEntity.prototype, "dur\u00E9e", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AbonnementEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => boutique_entity_1.BoutiqueEntity, (boutique) => boutique.abonnements, {
        cascade: ['insert', 'update'],
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", boutique_entity_1.BoutiqueEntity)
], AbonnementEntity.prototype, "boutique", void 0);
AbonnementEntity = __decorate([
    typeorm_1.Entity('abonnement')
], AbonnementEntity);
exports.AbonnementEntity = AbonnementEntity;
//# sourceMappingURL=abonnement.entity.js.map