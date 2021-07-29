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
const login_credentials_dto_1 = require("./DTO/login-credentials.dto");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
const passport_jwt_strategy_1 = require("./strategy/passport-jwt.strategy");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const rxjs_1 = require("rxjs");
const path_1 = require("path");
const path = require("path");
const uuid_1 = require("uuid");
const forgot_password_dto_1 = require("./DTO/forgot-password.dto");
let UtilisateurController = class UtilisateurController {
    constructor(userService, userconnecte) {
        this.userService = userService;
        this.userconnecte = userconnecte;
    }
    async getAllcvs() {
        return await this.userService.getUsers();
    }
    async getuserconnecte(request) {
        const user = request.user;
        return user;
    }
    async addCv(addCvDto) {
        return this.userService.addCv(addCvDto);
    }
    async Login(credentials) {
        return this.userService.login(credentials);
    }
    async forgotPassword(forgotPassword) {
        return this.userService.forgotPassword(forgotPassword);
    }
    async ChangePassword(updateUserDto, id) {
        return await this.userService.updateCv(id, updateUserDto);
    }
    async updateCv(updateUserDto, id) {
        return await this.userService.updateCv(id, updateUserDto);
    }
    uploadfile(file, id, updateUserDto) {
        updateUserDto.photodeprofil = file.filename;
        console.log(updateUserDto);
        return this.userService.updateCv(id, updateUserDto);
    }
    findProfileImage(res, image, request) {
        const user = request.user;
        return rxjs_1.of(res.sendFile(path_1.join(process.cwd(), 'uploads/images/' + image)));
    }
    async removeUser(id) {
        return this.userService.softDeleteUser(id);
    }
    async recoverUtilisateur(id) {
        this.userService.restoreUtilisateur(id);
    }
    async getusers() {
        return await this.userService.envoiemail();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "getAllcvs", null);
__decorate([
    common_1.Get('userconnecte'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "getuserconnecte", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_user_dto_1.AddUserDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "addCv", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_credentials_dto_1.LoginCredentialsDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "Login", null);
__decorate([
    common_1.Post('/forgotPassword'),
    __param(0, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "forgotPassword", null);
__decorate([
    common_1.Patch('/ChangePassword/:id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "ChangePassword", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "updateCv", null);
__decorate([
    common_1.Post('upload/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads/images',
            filename: (req, file, cb) => {
                const filename = path.parse(file.originalname).name.replace(/\s/g, '') + uuid_1.v4();
                const extension = path.parse(file.originalname).ext;
                cb(null, `${filename}${extension}`);
            },
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "uploadfile", null);
__decorate([
    common_1.Get('profileimage/:image'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('image')),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilisateurController.prototype, "findProfileImage", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
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
__decorate([
    common_1.Get('envoie'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "getusers", null);
UtilisateurController = __decorate([
    common_1.Controller('utilisateur'),
    __metadata("design:paramtypes", [utilisateur_service_1.UtilisateurService,
        passport_jwt_strategy_1.JwtStrategy])
], UtilisateurController);
exports.UtilisateurController = UtilisateurController;
//# sourceMappingURL=utilisateur.controller.js.map