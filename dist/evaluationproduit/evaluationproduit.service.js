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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationproduitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evaluationproduit_entity_1 = require("./entities/evaluationproduit.entity");
let EvaluationproduitService = class EvaluationproduitService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async addCv(evaluation, note, produit, user) {
        const newBoutique = this.userRepository.create(evaluation);
        newBoutique.produit = produit;
        newBoutique.user = user;
        newBoutique.note = note;
        return await this.userRepository.save(newBoutique);
    }
    async getProduitParBoutique(id) {
        const qb = await typeorm_2.getConnection()
            .createQueryBuilder()
            .select('AVG(evaluationproduit.note)', 'avg')
            .from(evaluationproduit_entity_1.EvaluationproduitEntity, 'evaluationproduit')
            .leftJoin('evaluationproduit.produit', 'produit')
            .where('evaluationproduit.produit.id = :id', { id })
            .getRawOne();
        return qb.avg;
    }
};
EvaluationproduitService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(evaluationproduit_entity_1.EvaluationproduitEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EvaluationproduitService);
exports.EvaluationproduitService = EvaluationproduitService;
//# sourceMappingURL=evaluationproduit.service.js.map