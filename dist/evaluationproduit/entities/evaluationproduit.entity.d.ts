import { ProduitEntity } from '../../produit/entities/produit.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class EvaluationproduitEntity extends TimestampEntities {
    id: number;
    note: number;
    produit: ProduitEntity;
    user: UserEntity;
}
