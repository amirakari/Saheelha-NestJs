import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { CommentaireEntity } from '../../commentaire/entities/commentaire.entity';
import { CommandeEntity } from '../../commande/entities/commande.entity';
import { ListefavorisEntity } from '../../listefavoris/entities/listefavoris.entity';
import { TimestampEntities } from 'Saheelha-NestJs/src/Generics/Timestamp.entities';
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
    commandes: CommandeEntity[];
    listefavoris: ListefavorisEntity[];
}
