"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbonnementModule = void 0;
const common_1 = require("@nestjs/common");
const abonnement_controller_1 = require("./abonnement.controller");
const abonnement_service_1 = require("./abonnement.service");
const typeorm_1 = require("@nestjs/typeorm");
const abonnement_entity_1 = require("./entities/abonnement.entity");
let AbonnementModule = class AbonnementModule {
};
AbonnementModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([abonnement_entity_1.AbonnementEntity])],
        controllers: [abonnement_controller_1.AbonnementController],
        providers: [abonnement_service_1.AbonnementService],
    })
], AbonnementModule);
exports.AbonnementModule = AbonnementModule;
//# sourceMappingURL=abonnement.module.js.map