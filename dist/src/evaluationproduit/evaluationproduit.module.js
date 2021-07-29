"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationproduitModule = void 0;
const common_1 = require("@nestjs/common");
const evaluationproduit_controller_1 = require("./evaluationproduit.controller");
const evaluationproduit_service_1 = require("./evaluationproduit.service");
const typeorm_1 = require("@nestjs/typeorm");
const evaluationproduit_entity_1 = require("./entities/evaluationproduit.entity");
let EvaluationproduitModule = class EvaluationproduitModule {
};
EvaluationproduitModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([evaluationproduit_entity_1.EvaluationproduitEntity])],
        controllers: [evaluationproduit_controller_1.EvaluationproduitController],
        providers: [evaluationproduit_service_1.EvaluationproduitService],
    })
], EvaluationproduitModule);
exports.EvaluationproduitModule = EvaluationproduitModule;
//# sourceMappingURL=evaluationproduit.module.js.map