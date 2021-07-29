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
exports.CommentaireService = void 0;
const common_1 = require("@nestjs/common");
const commentaire_entity_1 = require("./entities/commentaire.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produit_entity_1 = require("../produit/entities/produit.entity");
const user_entity_1 = require("../utilisateur/entities/user.entity");
let CommentaireService = class CommentaireService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers() {
        return await this.userRepository.find();
    }
    async addCv(commentaire, user, produit) {
        const newBoutique = this.userRepository.create(commentaire);
        newBoutique.user = user;
        newBoutique.produit = produit;
        return await this.userRepository.save(newBoutique);
    }
    async findById(id) {
        const utilisateur = await this.userRepository.findOne(id);
        if (!utilisateur) {
            throw new common_1.NotFoundException(`l'utilisateur d'id ${id} n'existe pas`);
        }
        return utilisateur;
    }
    async getCommentaireParProduit(id) {
        return this.userRepository
            .createQueryBuilder('commentaire')
            .innerJoinAndMapOne('commentaire.produit', produit_entity_1.ProduitEntity, 'produit', 'produit.id = commentaire.produit.id')
            .innerJoinAndMapOne('commentaire.user', user_entity_1.UserEntity, 'user', 'user.id = commentaire.user.id')
            .where('produit.id = :id', { id })
            .getMany();
    }
    async updateCv(id, user) {
        const newUser = await this.userRepository.preload(Object.assign({ id }, user));
        if (!newUser) {
            throw new common_1.NotFoundException(`le cv d'id ${id} n'existe pas`);
        }
        return await this.userRepository.save(newUser);
    }
    async softDeleteUser(id) {
        return this.userRepository.softDelete(id);
    }
    async restoreUtilisateur(id) {
        this.userRepository.restore(id);
    }
};
CommentaireService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(commentaire_entity_1.CommentaireEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentaireService);
exports.CommentaireService = CommentaireService;
//# sourceMappingURL=commentaire.service.js.map