import { UserEntity } from '../../utilisateur/entities/user.entity';
import { ProduitEntity } from '../../produit/entities/produit.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class CommandeEntity extends TimestampEntities {
    id: number;
    date: Date;
    quantite: number;
    prixtotale: number;
    user: UserEntity;
    produit: ProduitEntity;
}
