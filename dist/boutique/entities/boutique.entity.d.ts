import { UserEntity } from '../../utilisateur/entities/user.entity';
import { ProduitEntity } from '../../produit/entities/produit.entity';
import { AbonnementEntity } from '../../abonnement/entities/abonnement.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
export declare class BoutiqueEntity extends TimestampEntities {
    id: number;
    nom: string;
    adresse: string;
    photo: string;
    horaire: string;
    facebook: string;
    instagram: string;
    mapLat: number;
    mapLng: number;
    visite: string;
    mailprofessionnelle: string;
    domaine: string;
    user: UserEntity;
    produits: ProduitEntity[];
    abonnements: AbonnementEntity[];
}
