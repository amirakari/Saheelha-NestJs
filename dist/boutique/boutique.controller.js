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
exports.BoutiqueController = void 0;
const common_1 = require("@nestjs/common");
const boutique_service_1 = require("./boutique.service");
const Add_boutique_dto_1 = require("./DTO/Add-boutique.dto");
const update_boutique_dto_1 = require("./DTO/update-boutique.dto");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const rxjs_1 = require("rxjs");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let BoutiqueController = class BoutiqueController {
    constructor(boutiqueService) {
        this.boutiqueService = boutiqueService;
    }
    async getAllcvs() {
        return await this.boutiqueService.getBoutique();
    }
    async getboutiquebyuser(id) {
        return await this.boutiqueService.getBoutiqueParUser(id);
    }
    async addCv(addCvDto, request) {
        const user = request.user;
        return this.boutiqueService.addBoutique(addCvDto, user);
    }
    async updateCv(updateUserDto, id, user) {
        return await this.boutiqueService.updateBoutique(id, updateUserDto, user);
    }
    uploadfile(file, request, id, updateUserDto, user) {
        updateUserDto.photo = file.filename;
        console.log(updateUserDto);
        return this.boutiqueService.updateBoutique(id, updateUserDto, user);
    }
    findProfileImage(res, image, request) {
        const user = request.user;
        return rxjs_1.of(res.sendFile(path_1.join(process.cwd(), 'uploads/imagesboutique/' + image)));
    }
    async removeUser(id, user) {
        return this.boutiqueService.softDeleteBoutique(id, user);
    }
    async recoverUtilisateur(id, user) {
        this.boutiqueService.restoreUtilisateur(id, user);
    }
    async getBoutique(id) {
        return this.boutiqueService.findById(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "getAllcvs", null);
__decorate([
    common_1.Get('user/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "getboutiquebyuser", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_boutique_dto_1.AddBoutiqueDto, Object]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "addCv", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_boutique_dto_1.UpdateBoutiqueDto, Number, Object]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "updateCv", null);
__decorate([
    common_1.Post('upload/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads/imagesboutique',
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Req()),
    __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __param(3, common_1.Body()),
    __param(4, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number, update_boutique_dto_1.UpdateBoutiqueDto, Object]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "uploadfile", null);
__decorate([
    common_1.Get('profileimage/:image'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('image')),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], BoutiqueController.prototype, "findProfileImage", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "removeUser", null);
__decorate([
    common_1.Get('/recover/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "recoverUtilisateur", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoutiqueController.prototype, "getBoutique", null);
BoutiqueController = __decorate([
    common_1.Controller('boutique'),
    __metadata("design:paramtypes", [boutique_service_1.BoutiqueService])
], BoutiqueController);
exports.BoutiqueController = BoutiqueController;
//# sourceMappingURL=boutique.controller.js.map