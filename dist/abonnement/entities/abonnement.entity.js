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
const Timestamp_entities_1 = require("../../Generics/Timestamp.entities");
const abonnement_dur_e_enum_1 = require("../../enums/abonnement.dur\u00E9e.enum");
const abonnement_status_enum_1 = require("../../enums/abonnement.status.enum");
let AbonnementEntity = class AbonnementEntity extends Timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AbonnementEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: abonnement_dur_e_enum_1.AbonnementDurEEnum }),
    __metadata("design:type", String)
], AbonnementEntity.prototype, "dur\u00E9e", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: abonnement_status_enum_1.AbonnementStatusEnum }),
    __metadata("design:type", String)
], AbonnementEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], AbonnementEntity.prototype, "prix", void 0);
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