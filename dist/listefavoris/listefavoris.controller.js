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
exports.ListefavorisController = void 0;
const common_1 = require("@nestjs/common");
const listefavoris_service_1 = require("./listefavoris.service");
const jwt_auth_guard_1 = require("../Guards/jwt-auth.guard");
let ListefavorisController = class ListefavorisController {
    constructor(PanierService) {
        this.PanierService = PanierService;
    }
    async addCv(request) {
        const user = request.user;
        return this.PanierService.addCv(user);
    }
    async getPanierParutilisateurConnecté(request) {
        const user = request.user;
        return this.PanierService.getPanierParutilisateurConnecté(user);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListefavorisController.prototype, "addCv", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListefavorisController.prototype, "getPanierParutilisateurConnect\u00E9", null);
ListefavorisController = __decorate([
    common_1.Controller('listefavoris'),
    __metadata("design:paramtypes", [listefavoris_service_1.ListefavorisService])
], ListefavorisController);
exports.ListefavorisController = ListefavorisController;
//# sourceMappingURL=listefavoris.controller.js.map