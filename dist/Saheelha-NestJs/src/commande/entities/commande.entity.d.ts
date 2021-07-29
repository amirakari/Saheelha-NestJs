import { UserEntity } from '../../utilisateur/entities/user.entity';
import { ProduitEntity } from '../../produit/entities/produit.entity';
export declare class CommandeEntity {
    id: number;
    date: Date;
    quantite: number;
    user: UserEntity;
    produit: ProduitEntity;
}
