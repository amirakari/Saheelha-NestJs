import { TimestampEntities } from '../../Generics/Timestamp.entities';
import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { CommentaireEntity } from '../../commentaire/entities/commentaire.entity';
import { EvaluationproduitEntity } from '../../evaluationproduit/entities/evaluationproduit.entity';
import { CommandeEntity } from '../../commande/entities/commande.entity';
import { ListefavorisEntity } from '../../listefavoris/entities/listefavoris.entity';
export declare class UserEntity extends TimestampEntities {
    id: number;
    nom: string;
    prenom: string;
    numtel: number;
    adresse: string;
    type: string;
    salt: string;
    mail: string;
    password: string;
    boutiques: BoutiqueEntity[];
    commentaires: CommentaireEntity[];
    evaluationproduit: EvaluationproduitEntity[];
    commandes: CommandeEntity[];
    listefavoris: ListefavorisEntity[];
}
