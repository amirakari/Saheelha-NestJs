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
exports.EvaluationproduitController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const produit_service_1 = require("../produit/produit.service");
const evaluationproduit_service_1 = require("./evaluationproduit.service");
const Add_evaluation_dto_1 = require("./DTO/Add-evaluation.dto");
let EvaluationproduitController = class EvaluationproduitController {
    constructor(userService, produitService) {
        this.userService = userService;
        this.produitService = produitService;
    }
    async addCv(addCvDto, id, note, request) {
        const boutique = await this.produitService.findById(id);
        console.log(boutique);
        const user = request.user;
        return this.userService.addCv(addCvDto, note, boutique, user);
    }
    async getproduitbyId(id) {
        const evalution = await this.userService.getProduitParBoutique(id);
        return evalution;
    }
};
__decorate([
    common_1.Post(':id/:note'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, common_1.Param('note', common_1.ParseIntPipe)),
    __param(3, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_evaluation_dto_1.AddEvaluationDto, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], EvaluationproduitController.prototype, "addCv", null);
__decorate([
    common_1.Get('produit/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EvaluationproduitController.prototype, "getproduitbyId", null);
EvaluationproduitController = __decorate([
    common_1.Controller('evaluationproduit'),
    __metadata("design:paramtypes", [evaluationproduit_service_1.EvaluationproduitService,
        produit_service_1.ProduitService])
], EvaluationproduitController);
exports.EvaluationproduitController = EvaluationproduitController;
//# sourceMappingURL=evaluationproduit.controller.js.map