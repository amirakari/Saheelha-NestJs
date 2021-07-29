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
exports.UtilisateurController = void 0;
const common_1 = require("@nestjs/common");
const utilisateur_service_1 = require("./utilisateur.service");
const Add_user_dto_1 = require("./DTO/Add-user.dto");
const update_user_dto_1 = require("./DTO/update-user.dto");
let UtilisateurController = class UtilisateurController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllcvs() {
        return await this.userService.getUsers();
    }
    async addCv(addCvDto) {
        return this.userService.addCv(addCvDto);
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
], UtilisateurController.prototype, "getAllcvs", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_user_dto_1.AddUserDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "addCv", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "updateCv", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "removeUser", null);
__decorate([
    common_1.Get('/recover/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "recoverUtilisateur", null);
UtilisateurController = __decorate([
    common_1.Controller('utilisateur'),
    __metadata("design:paramtypes", [utilisateur_service_1.UtilisateurService])
], UtilisateurController);
exports.UtilisateurController = UtilisateurController;
//# sourceMappingURL=utilisateur.controller.js.map