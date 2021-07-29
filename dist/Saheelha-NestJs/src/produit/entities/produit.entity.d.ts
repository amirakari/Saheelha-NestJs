import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { CommentaireEntity } from '../../commentaire/entities/commentaire.entity';
import { EvaluationproduitEntity } from '../../evaluationproduit/entities/evaluationproduit.entity';
import { CommandeEntity } from '../../commande/entities/commande.entity';
import { ListefavorisEntity } from '../../listefavoris/entities/listefavoris.entity';
export declare class ProduitEntity {
    id: number;
    categorie: string;
    DLC: Date;
    nom: string;
    codeabare: string;
    prixsansremise: number;
    prixavecremise: number;
    reference: string;
    boutique: BoutiqueEntity;
    commentaires: CommentaireEntity[];
    evaluationsproduits: EvaluationproduitEntity[];
    commandes: CommandeEntity[];
    listefavoris: ListefavorisEntity;
}
