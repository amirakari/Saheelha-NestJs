import { UnauthorizedException } from '@nestjs/common';
import { BoutiqueEntity } from './entities/boutique.entity';
import { Repository } from 'typeorm';
import { AddBoutiqueDto } from './DTO/Add-boutique.dto';
import { UpdateBoutiqueDto } from './DTO/update-boutique.dto';
export declare class BoutiqueService {
    private boutiqueRepository;
    constructor(boutiqueRepository: Repository<BoutiqueEntity>);
    getBoutique(): Promise<BoutiqueEntity[]>;
    addBoutique(boutique: AddBoutiqueDto, user: any): Promise<BoutiqueEntity>;
    findById(id: number): Promise<BoutiqueEntity>;
    updateBoutique(id: number, boutique: UpdateBoutiqueDto, user: any): Promise<BoutiqueEntity>;
    getBoutiqueParUser(id: number): Promise<BoutiqueEntity[]>;
    softDeleteBoutique(id: number, user: any): Promise<import("typeorm").UpdateResult | UnauthorizedException>;
    restoreUtilisateur(id: number, user: any): Promise<import("typeorm").UpdateResult | UnauthorizedException>;
}
