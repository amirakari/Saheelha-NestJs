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
exports.CommandeController = void 0;
const common_1 = require("@nestjs/common");
const commande_service_1 = require("./commande.service");
const Add_commande_dto_1 = require("./DTO/Add-commande.dto");
const update_commande_dto_1 = require("./DTO/update-commande.dto");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const produit_service_1 = require("../produit/produit.service");
let CommandeController = class CommandeController {
    constructor(userService, produitService) {
        this.userService = userService;
        this.produitService = produitService;
    }
    async getAllcvs(id) {
        return await this.userService.getUsers(id);
    }
    async getCommandebyboutique(id) {
        return await this.userService.getCommandebyboutique(id);
    }
    async getCommandeEnMai(id) {
        return await this.userService.getCommandeEnMai(id);
    }
    async getCommandeEnJanvier(id) {
        return await this.userService.getCommandeEnJanvier(id);
    }
    async getCommandeEnFevier(id) {
        return await this.userService.getCommandeEnFevrier(id);
    }
    async getCommandeEnMars(id) {
        return await this.userService.getCommandeEnMars(id);
    }
    async getCommandeEnAvril(id) {
        return await this.userService.getCommandeEnAvril(id);
    }
    async getCommandeEnJuin(id) {
        return await this.userService.getCommandeEnJuin(id);
    }
    async getCommandeEnJuillet(id) {
        return await this.userService.getCommandeEnJuillet(id);
    }
    async getCommandeEnAout(id) {
        return await this.userService.getCommandeEnAout(id);
    }
    async getCommandeEnSeptembre(id) {
        return await this.userService.getCommandeEnSeptembre(id);
    }
    async getCommandeEnOctobre(id) {
        return await this.userService.getCommandeEnOctobre(id);
    }
    async getCommandeEnNovembre(id) {
        return await this.userService.getCommandeEnNovembre(id);
    }
    async getCommandeEnDecembre(id) {
        return await this.userService.getCommandeEnDecembre(id);
    }
    async getCommandeById(id) {
        return await this.userService.findById(id);
    }
    async addCv(addCvDto, request, id, quantite) {
        const user = request.user;
        const boutique = await this.produitService.findById(id);
        addCvDto.prixtotale = quantite * boutique.prixavecremise;
        console.log(addCvDto.prixtotale);
        return this.userService.addCv(addCvDto, user, quantite, boutique);
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
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getAllcvs", null);
__decorate([
    common_1.Get('boutique/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandebyboutique", null);
__decorate([
    common_1.Get('Mai/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnMai", null);
__decorate([
    common_1.Get('Janvier/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnJanvier", null);
__decorate([
    common_1.Get('Fevrier/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnFevier", null);
__decorate([
    common_1.Get('Mars/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnMars", null);
__decorate([
    common_1.Get('Avril/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnAvril", null);
__decorate([
    common_1.Get('Juin/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnJuin", null);
__decorate([
    common_1.Get('Juillet/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnJuillet", null);
__decorate([
    common_1.Get('Aout/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnAout", null);
__decorate([
    common_1.Get('Septembre/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnSeptembre", null);
__decorate([
    common_1.Get('Octobre/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnOctobre", null);
__decorate([
    common_1.Get('Novembre/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnNovembre", null);
__decorate([
    common_1.Get('Decembre/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeEnDecembre", null);
__decorate([
    common_1.Get('get/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "getCommandeById", null);
__decorate([
    common_1.Post(':quantite/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __param(3, common_1.Param('quantite', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_commande_dto_1.AddCommandeDto, Object, Number, Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "addCv", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_commande_dto_1.UpdateCommandeDto, Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "updateCv", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "removeUser", null);
__decorate([
    common_1.Get('/recover/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "recoverUtilisateur", null);
CommandeController = __decorate([
    common_1.Controller('commande'),
    __metadata("design:paramtypes", [commande_service_1.CommandeService,
        produit_service_1.ProduitService])
], CommandeController);
exports.CommandeController = CommandeController;
//# sourceMappingURL=commande.controller.js.map