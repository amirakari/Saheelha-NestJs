import { AbonnementService } from './abonnement.service';
import { AbonnementEntity } from './entities/abonnement.entity';
import { UpdateAbonnementDto } from './DTO/update-abonnement.dto';
import { InsertResult } from 'typeorm';
import { BoutiqueService } from '../boutique/boutique.service';
export declare class AbonnementController {
    private userService;
    private boutiqueService;
    constructor(userService: AbonnementService, boutiqueService: BoutiqueService);
    getAllcvs(): Promise<AbonnementEntity[]>;
    addCv10(id: number): Promise<InsertResult>;
    addCv20(id: number): Promise<InsertResult>;
    addCv100(id: number): Promise<InsertResult>;
    updateCv(updateUserDto: UpdateAbonnementDto, id: number): Promise<AbonnementEntity>;
    removeUser(id: number): Promise<import("typeorm").UpdateResult>;
    recoverUtilisateur(id: number): Promise<void>;
    getproduitbyId(id: number): Promise<AbonnementEntity[]>;
    PayeAbo(updateUserDto: UpdateAbonnementDto, id: number): Promise<AbonnementEntity>;
    verifierPaiement(id: number): Promise<boolean>;
}
