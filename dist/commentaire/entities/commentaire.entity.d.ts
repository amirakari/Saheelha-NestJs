import { ProduitEntity } from '../../produit/entities/produit.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class CommentaireEntity extends TimestampEntities {
    id: number;
    message: string;
    nbrelike: number;
    nbredislike: number;
    nbreemojis: number;
    produit: ProduitEntity;
    user: UserEntity;
}
