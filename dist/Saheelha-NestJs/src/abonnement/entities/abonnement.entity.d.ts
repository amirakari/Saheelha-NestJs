import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
export declare class AbonnementEntity {
    id: number;
    durée: string;
    status: string;
    boutique: BoutiqueEntity;
}
