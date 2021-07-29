import { ProduitEntity } from '../../produit/entities/produit.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
export declare class ListefavorisEntity {
    id: number;
    produits: ProduitEntity[];
    user: UserEntity[];
}
