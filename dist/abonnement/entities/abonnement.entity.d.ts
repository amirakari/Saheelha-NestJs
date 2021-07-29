import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class AbonnementEntity extends TimestampEntities {
    id: number;
    durée: string;
    status: string;
    prix: number;
    boutique: BoutiqueEntity;
}
