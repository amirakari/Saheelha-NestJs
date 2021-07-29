import { UserEntity } from '../../utilisateur/entities/user.entity';
import { ProduitEntity } from '../../produit/entities/produit.entity';
import { AbonnementEntity } from '../../abonnement/entities/abonnement.entity';
export declare class BoutiqueEntity {
    id: number;
    nom: string;
    adresse: string;
    photo: string;
    horaire: string;
    visite: string;
    mailprofessionnelle: string;
    domaine: string;
    user: UserEntity;
    produits: ProduitEntity[];
    abonnements: AbonnementEntity[];
}
