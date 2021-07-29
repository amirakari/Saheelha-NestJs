import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { CommentaireEntity } from '../../commentaire/entities/commentaire.entity';
import { EvaluationproduitEntity } from '../../evaluationproduit/entities/evaluationproduit.entity';
import { CommandeEntity } from '../../commande/entities/commande.entity';
import { PanierEntity } from '../../listefavoris/entities/panier.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class ProduitEntity extends TimestampEntities {
    id: number;
    categorie: string;
    DLC: Date;
    nom: string;
    codeabare: number;
    prixsansremise: number;
    photo1: string;
    quantite: number;
    status: string;
    prixavecremise: number;
    reference: string;
    boutique: BoutiqueEntity;
    commentaires: CommentaireEntity[];
    evaluationsproduits: EvaluationproduitEntity[];
    commandes: CommandeEntity[];
    panier: PanierEntity;
}
