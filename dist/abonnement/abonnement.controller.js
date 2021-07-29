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
exports.AbonnementController = void 0;
const common_1 = require("@nestjs/common");
const abonnement_service_1 = require("./abonnement.service");
const update_abonnement_dto_1 = require("./DTO/update-abonnement.dto");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const boutique_service_1 = require("../boutique/boutique.service");
let AbonnementController = class AbonnementController {
    constructor(userService, boutiqueService) {
        this.userService = userService;
        this.boutiqueService = boutiqueService;
    }
    async getAllcvs() {
        return await this.userService.getUsers();
    }
    async addCv10(id) {
        const boutique = await this.boutiqueService.findById(id);
        console.log(boutique);
        return await this.userService.addCv1(boutique);
    }
    async addCv20(id) {
        const boutique = await this.boutiqueService.findById(id);
        console.log(boutique);
        return await this.userService.addCv2(boutique);
    }
    async addCv100(id) {
        const boutique = await this.boutiqueService.findById(id);
        console.log(boutique);
        return await this.userService.addCv3(boutique);
    }
    async updateCv(updateUserDto, id) {
        return await this.userService.updateCv(id, updateUserDto);
    }
    async removeUser(id) {
        return this.userService.softDeleteUser(id);
    }
    async recoverUtilisateur(id) {
        this.userService.restoreUtilisateur(id);
    }
    async getproduitbyId(id) {
        return await this.userService.getAboParBoutique(id);
    }
    async PayeAbo(updateUserDto, id) {
        updateUserDto.status = 'payé';
        return await this.userService.PayeAbo(id, updateUserDto);
    }
    async verifierPaiement(id) {
        return this.userService.verifierPaiement(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "getAllcvs", null);
__decorate([
    common_1.Post('abo1/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "addCv10", null);
__decorate([
    common_1.Post('abo2/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "addCv20", null);
__decorate([
    common_1.Post('abo3/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "addCv100", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_abonnement_dto_1.UpdateAbonnementDto, Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "updateCv", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "removeUser", null);
__decorate([
    common_1.Get('/recover/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "recoverUtilisateur", null);
__decorate([
    common_1.Get('boutique/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "getproduitbyId", null);
__decorate([
    common_1.Patch('paymee/:id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_abonnement_dto_1.UpdateAbonnementDto, Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "PayeAbo", null);
__decorate([
    common_1.Get('/paiement/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "verifierPaiement", null);
AbonnementController = __decorate([
    common_1.Controller('abonnement'),
    __metadata("design:paramtypes", [abonnement_service_1.AbonnementService,
        boutique_service_1.BoutiqueService])
], AbonnementController);
exports.AbonnementController = AbonnementController;
//# sourceMappingURL=abonnement.controller.js.map