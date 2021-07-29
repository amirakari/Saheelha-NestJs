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
exports.AbonnementService = void 0;
const common_1 = require("@nestjs/common");
const abonnement_entity_1 = require("./entities/abonnement.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AbonnementService = class AbonnementService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers() {
        return await this.userRepository.find();
    }
    async addCv1(boutique) {
        const qb = this.userRepository.createQueryBuilder('abonnement');
        return await qb
            .insert()
            .into(abonnement_entity_1.AbonnementEntity)
            .values({
            durée: '1 moi',
            status: 'non payé',
            prix: 10,
            boutique: boutique,
        })
            .execute();
    }
    async addCv2(boutique) {
        const qb = this.userRepository.createQueryBuilder('abonnement');
        return await qb
            .insert()
            .into(abonnement_entity_1.AbonnementEntity)
            .values({
            durée: '3 mois',
            status: 'non payé',
            prix: 20,
            boutique: boutique,
        })
            .execute();
    }
    async addCv3(boutique) {
        const qb = this.userRepository.createQueryBuilder('abonnement');
        return await qb
            .insert()
            .into(abonnement_entity_1.AbonnementEntity)
            .values({
            durée: '12 mois',
            status: 'non payé',
            prix: 100,
            boutique: boutique,
        })
            .execute();
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
    async getAboParBoutique(id) {
        const qb = this.userRepository
            .createQueryBuilder('produit')
            .where('produit.boutique.id = :id', { id })
            .getMany();
        return qb;
    }
    async PayeAbo(id, user) {
        const newUser = await this.userRepository.preload(Object.assign({ id }, user));
        if (!newUser) {
            throw new common_1.NotFoundException(`le cv d'id ${id} n'existe pas`);
        }
        return await this.userRepository.save(newUser);
    }
    async verifierPaiement(id) {
        const datedujour = new Date();
        const status = 'payé';
        const qb = await typeorm_1.getConnection()
            .createQueryBuilder()
            .select('abonnement')
            .from(abonnement_entity_1.AbonnementEntity, 'abonnement')
            .where('abonnement.boutique.id = :id', { id })
            .andWhere('abonnement.status = :status', { status })
            .getRawMany();
        for (let i = 0; i < qb.length; i++) {
            console.log(qb[i]);
            if (qb[i].abonnement_durée === '1 moi') {
                const d = qb[i].abonnement_createdAt.getDate();
                qb[i].abonnement_createdAt.setMonth(qb[i].abonnement_createdAt.getMonth() + +1);
                if (qb[i].abonnement_createdAt.getDate() != d) {
                    qb[i].abonnement_createdAt.setDate(0);
                }
                if (qb[i].abonnement_createdAt > datedujour) {
                    return true;
                }
                else {
                    return false;
                }
            }
            if (qb[i].abonnement_durée === '3 mois') {
                const d = qb[i].abonnement_createdAt.getDate();
                qb[i].abonnement_createdAt.setMonth(qb[i].abonnement_createdAt.getMonth() + +3);
                if (qb[i].abonnement_createdAt.getDate() != d) {
                    qb[i].abonnement_createdAt.setDate(0);
                }
                console.log(qb[i].abonnement_createdAt);
                if (qb[i].abonnement_createdAt > datedujour) {
                    return true;
                }
                else {
                    return false;
                }
            }
            if (qb[i].abonnement_durée === '12 mois') {
                const d = qb[i].abonnement_createdAt.getDate();
                qb[i].abonnement_createdAt.setMonth(qb[i].abonnement_createdAt.getMonth() + +12);
                if (qb[i].abonnement_createdAt.getDate() != d) {
                    qb[i].abonnement_createdAt.setDate(0);
                }
                if (qb[i].abonnement_createdAt > datedujour) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
};
AbonnementService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(abonnement_entity_1.AbonnementEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AbonnementService);
exports.AbonnementService = AbonnementService;
//# sourceMappingURL=abonnement.service.js.map