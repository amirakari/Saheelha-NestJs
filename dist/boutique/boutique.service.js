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
exports.BoutiqueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const boutique_entity_1 = require("./entities/boutique.entity");
const typeorm_2 = require("typeorm");
const user_type_enum_1 = require("../enums/user.type.enum");
let BoutiqueService = class BoutiqueService {
    constructor(boutiqueRepository) {
        this.boutiqueRepository = boutiqueRepository;
    }
    async getBoutique() {
        return await this.boutiqueRepository.find();
    }
    async addBoutique(boutique, user) {
        const newBoutique = this.boutiqueRepository.create(boutique);
        newBoutique.user = user;
        return await this.boutiqueRepository.save(newBoutique);
    }
    async findById(id) {
        const utilisateur = await this.boutiqueRepository.findOne(id);
        return utilisateur;
    }
    async updateBoutique(id, boutique, user) {
        const newUser = await this.boutiqueRepository.preload(Object.assign({ id }, boutique));
        if (!newUser) {
            throw new common_1.NotFoundException(`le cv d'id ${id} n'existe pas`);
        }
        if (user.type === user_type_enum_1.UserTypeEnum.ADMIN ||
            (newUser.user && newUser.user.id === user.id))
            return await this.boutiqueRepository.save(newUser);
        else
            throw new common_1.UnauthorizedException();
    }
    async getBoutiqueParUser(id) {
        const qb = this.boutiqueRepository
            .createQueryBuilder('boutique')
            .where('boutique.user.id = :id', { id });
        return qb.getMany();
    }
    async softDeleteBoutique(id, user) {
        const newUser = await this.boutiqueRepository.findOne(id);
        if (user.type === user_type_enum_1.UserTypeEnum.ADMIN ||
            (newUser.user && newUser.user.id === user.id))
            return this.boutiqueRepository.softDelete(id);
        else
            return new common_1.UnauthorizedException();
    }
    async restoreUtilisateur(id, user) {
        const newUser = await this.boutiqueRepository.query('select  * from boutique where id = ?', [id]);
        console.log(newUser);
        if (!newUser) {
            throw new common_1.NotFoundException();
        }
        if (user.type === user_type_enum_1.UserTypeEnum.ADMIN ||
            (newUser.user && newUser.user.id === user.id))
            return this.boutiqueRepository.restore(id);
        else
            return new common_1.UnauthorizedException();
    }
};
BoutiqueService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(boutique_entity_1.BoutiqueEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoutiqueService);
exports.BoutiqueService = BoutiqueService;
//# sourceMappingURL=boutique.service.js.map