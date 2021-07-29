import { AbonnementEntity } from './entities/abonnement.entity';
import { UpdateAbonnementDto } from './DTO/update-abonnement.dto';
import { AddAbonnementDto } from './DTO/Add-abonnement.dto';
import { InsertResult, Repository } from 'typeorm';
export declare class AbonnementService {
    private userRepository;
    addAbonnementDto: AddAbonnementDto;
    constructor(userRepository: Repository<AbonnementEntity>);
    getUsers(): Promise<AbonnementEntity[]>;
    addCv1(boutique: any): Promise<InsertResult>;
    addCv2(boutique: any): Promise<InsertResult>;
    addCv3(boutique: any): Promise<InsertResult>;
    findById(id: number): Promise<AbonnementEntity>;
    updateCv(id: number, user: UpdateAbonnementDto): Promise<AbonnementEntity>;
    softDeleteUser(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUtilisateur(id: number): Promise<void>;
    getAboParBoutique(id: number): Promise<AbonnementEntity[]>;
    PayeAbo(id: number, user: UpdateAbonnementDto): Promise<AbonnementEntity>;
    verifierPaiement(id: number): Promise<boolean>;
}
