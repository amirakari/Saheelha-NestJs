import { ProduitEntity } from '../../produit/entities/produit.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
export declare class CommentaireEntity {
    id: number;
    message: string;
    nbrelike: number;
    nbredislike: number;
    nbreemojis: number;
    produit: ProduitEntity;
    user: UserEntity;
}
