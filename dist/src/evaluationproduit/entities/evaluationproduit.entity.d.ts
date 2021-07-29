import { ProduitEntity } from '../../produit/entities/produit.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
export declare class EvaluationproduitEntity {
    id: number;
    note: number;
    produit: ProduitEntity;
    user: UserEntity;
}
