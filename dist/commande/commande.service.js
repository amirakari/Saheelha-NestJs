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
exports.CommandeService = void 0;
const common_1 = require("@nestjs/common");
const commande_entity_1 = require("./entities/commande.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CommandeService = class CommandeService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers(id) {
        return this.userRepository.find({
            where: [
                {
                    user: typeorm_2.Like(`%${id}%`),
                },
            ],
        });
    }
    async addCv(boutique, user, quantite, produit) {
        const newBoutique = this.userRepository.create(boutique);
        newBoutique.date = new Date();
        newBoutique.quantite = quantite;
        newBoutique.produit = produit;
        newBoutique.user = user;
        return await this.userRepository.save(newBoutique);
    }
    async findById(id) {
        const utilisateur = await this.userRepository.findOne(id);
        if (!utilisateur) {
            throw new common_1.NotFoundException(`l'utilisateur d'id ${id} n'existe pas`);
        }
        return utilisateur;
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
    async getCommandebyboutique(id) {
        return this.userRepository.find({
            where: [
                {
                    produit: typeorm_2.Like(`%${id}%`),
                },
            ],
        });
    }
    async getCommandeEnMai(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 5')
            .getCount();
        return qb;
    }
    async getCommandeEnJanvier(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 1')
            .getCount();
        return qb;
    }
    async getCommandeEnFevrier(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 2')
            .getCount();
        return qb;
    }
    async getCommandeEnMars(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 3')
            .getCount();
        return qb;
    }
    async getCommandeEnAvril(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 4')
            .getCount();
        return qb;
    }
    async getCommandeEnJuin(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 6')
            .getCount();
        return qb;
    }
    async getCommandeEnJuillet(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 7')
            .getCount();
        return qb;
    }
    async getCommandeEnAout(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 8')
            .getCount();
        return qb;
    }
    async getCommandeEnSeptembre(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 9')
            .getCount();
        return qb;
    }
    async getCommandeEnOctobre(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 10')
            .getCount();
        return qb;
    }
    async getCommandeEnNovembre(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 11')
            .getCount();
        return qb;
    }
    async getCommandeEnDecembre(id) {
        const qb = this.userRepository
            .createQueryBuilder('commande')
            .innerJoin('commande.produit', 'produit')
            .innerJoin('produit.boutique', 'boutique')
            .where('boutique.id = :id', { id })
            .andWhere('MONTH(commande.date) = 12')
            .getCount();
        return qb;
    }
};
CommandeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(commande_entity_1.CommandeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommandeService);
exports.CommandeService = CommandeService;
//# sourceMappingURL=commande.service.js.map