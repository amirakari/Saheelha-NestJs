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
exports.ProduitController = void 0;
const common_1 = require("@nestjs/common");
const produit_service_1 = require("./produit.service");
const Add_produit_dto_1 = require("./DTO/Add-produit.dto");
const update_produit_dto_1 = require("./DTO/update-produit.dto");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const boutique_service_1 = require("../boutique/boutique.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const user_decorator_1 = require("../decorators/user.decorator");
const rxjs_1 = require("rxjs");
const path_1 = require("path");
let ProduitController = class ProduitController {
    constructor(userService, boutiqueService) {
        this.userService = userService;
        this.boutiqueService = boutiqueService;
    }
    async getAllcvs() {
        return await this.userService.getUsers();
    }
    async rechercheParNom(nom) {
        if (nom == null || nom == undefined) {
            return await this.userService.getUsers();
        }
        else {
            return this.userService.rechercheParNom(nom);
        }
    }
    async rechercheParLocalisation(adresse) {
        if (adresse === null || adresse === undefined) {
            return await this.userService.getUsers();
        }
        else {
            return this.userService.rechercheParLocalisation(adresse);
        }
    }
    async recherchePartype(type) {
        if (type == null || type == undefined) {
            return await this.userService.getUsers();
        }
        else {
            return this.userService.recherchePartype(type);
        }
    }
    async rechercheParStatus(status) {
        if (status == null || status == undefined) {
            return await this.userService.getUsers();
        }
        else {
            return this.userService.rechercheParStatus(status);
        }
    }
    async getProduitbyId(id) {
        return await this.userService.findById(id);
    }
    async getproduitbyId(id) {
        return await this.userService.getProduitParBoutique(id);
    }
    uploadfile(file, request, id, updateUserDto, user) {
        updateUserDto.photo1 = file.filename;
        console.log(updateUserDto);
        return this.userService.updateCv(id, updateUserDto);
    }
    findProfileImage(res, image) {
        return rxjs_1.of(res.sendFile(path_1.join(process.cwd(), 'uploads/imagesproduit/' + image)));
    }
    async getproduitbyId1(id) {
        return await this.userService.getProduitParBoutiqueDon(id);
    }
    async addCv(addCvDto, codeabare, id) {
        const boutique = await this.boutiqueService.findById(id);
        console.log(boutique);
        return this.userService.addCv(addCvDto, codeabare, boutique);
    }
    async updateCv(updateUserDto, id) {
        return await this.userService.updateCv(id, updateUserDto);
    }
    async ajouterProduitaupanier(updateUserDto, id, quantite) {
        const produit = await this.userService.findById(id);
        produit.quantite = produit.quantite - quantite;
        updateUserDto.quantite = produit.quantite;
        console.log(updateUserDto.quantite);
        await this.userService.updateCv(id, updateUserDto);
    }
    async supprimerProduitaupanier(updateUserDto, id, quantite) {
        const produit = await this.userService.findById(id);
        produit.quantite = produit.quantite + quantite;
        updateUserDto.quantite = produit.quantite;
        console.log(updateUserDto.quantite);
        await this.userService.updateCv(id, updateUserDto);
    }
    async rechercheParPanier(id) {
        console.log('amir');
        return this.userService.findByPanierId(id);
        console.log('akari');
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
], ProduitController.prototype, "getAllcvs", null);
__decorate([
    common_1.Get('recherche'),
    __param(0, common_1.Query('nom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "rechercheParNom", null);
__decorate([
    common_1.Get('recherche3'),
    __param(0, common_1.Query('adresse')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "rechercheParLocalisation", null);
__decorate([
    common_1.Get('recherche1'),
    __param(0, common_1.Query('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "recherchePartype", null);
__decorate([
    common_1.Get('recherche2'),
    __param(0, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "rechercheParStatus", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "getProduitbyId", null);
__decorate([
    common_1.Get('boutique/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "getproduitbyId", null);
__decorate([
    common_1.Post('upload/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads/imagesproduit',
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Req()),
    __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __param(3, common_1.Body()),
    __param(4, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number, update_produit_dto_1.UpdateProduitDto, Object]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "uploadfile", null);
__decorate([
    common_1.Get('image/:image'),
    __param(0, common_1.Res()), __param(1, common_1.Param('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], ProduitController.prototype, "findProfileImage", null);
__decorate([
    common_1.Get('boutique1/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "getproduitbyId1", null);
__decorate([
    common_1.Post(':codeabare/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('codeabare', common_1.ParseIntPipe)),
    __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_produit_dto_1.AddProduitDto, Number, Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "addCv", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_produit_dto_1.UpdateProduitDto, Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "updateCv", null);
__decorate([
    common_1.Patch('panier/:id/:quantite'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, common_1.Param('quantite', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_produit_dto_1.UpdateProduitDto, Number, Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "ajouterProduitaupanier", null);
__decorate([
    common_1.Patch(':id/:quantite'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, common_1.Param('quantite', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_produit_dto_1.UpdateProduitDto, Number, Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "supprimerProduitaupanier", null);
__decorate([
    common_1.Get('amir/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "rechercheParPanier", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "removeUser", null);
__decorate([
    common_1.Get('/recover/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduitController.prototype, "recoverUtilisateur", null);
ProduitController = __decorate([
    common_1.Controller('produit'),
    __metadata("design:paramtypes", [produit_service_1.ProduitService,
        boutique_service_1.BoutiqueService])
], ProduitController);
exports.ProduitController = ProduitController;
//# sourceMappingURL=produit.controller.js.map