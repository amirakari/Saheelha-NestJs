import { ProduitEntity } from '../../produit/entities/produit.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class PanierEntity extends TimestampEntities {
    id: number;
    produits: ProduitEntity[];
    user: UserEntity[];
}
