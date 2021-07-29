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
exports.CommentaireController = void 0;
const common_1 = require("@nestjs/common");
const commentaire_service_1 = require("./commentaire.service");
const Add_commentaire_dto_1 = require("./DTO/Add-commentaire.dto");
const update_commentaire_dto_1 = require("./DTO/update-commentaire.dto");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const produit_service_1 = require("../produit/produit.service");
let CommentaireController = class CommentaireController {
    constructor(userService, produitService) {
        this.userService = userService;
        this.produitService = produitService;
    }
    async getAllcvs() {
        return await this.userService.getUsers();
    }
    async addCv(addCvDto, request, id) {
        const user = request.user;
        const boutique = await this.produitService.findById(id);
        return this.userService.addCv(addCvDto, user, boutique);
    }
    async getproduitbyId(id) {
        return await this.userService.getCommentaireParProduit(id);
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
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentaireController.prototype, "getAllcvs", null);
__decorate([
    common_1.Post(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_commentaire_dto_1.AddCommentaireDto, Object, Number]),
    __metadata("design:returntype", Promise)
], CommentaireController.prototype, "addCv", null);
__decorate([
    common_1.Get('produit/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentaireController.prototype, "getproduitbyId", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_commentaire_dto_1.UpdateCommentaireDto, Number]),
    __metadata("design:returntype", Promise)
], CommentaireController.prototype, "updateCv", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentaireController.prototype, "removeUser", null);
__decorate([
    common_1.Get('/recover/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentaireController.prototype, "recoverUtilisateur", null);
CommentaireController = __decorate([
    common_1.Controller('commentaire'),
    __metadata("design:paramtypes", [commentaire_service_1.CommentaireService,
        produit_service_1.ProduitService])
], CommentaireController);
exports.CommentaireController = CommentaireController;
//# sourceMappingURL=commentaire.controller.js.map