import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../utilisateur/entities/user.entity';
import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { CommentaireEntity } from '../../commentaire/entities/commentaire.entity';
import { EvaluationproduitEntity } from '../../evaluationproduit/entities/evaluationproduit.entity';
import { CommandeEntity } from '../../commande/entities/commande.entity';
import { PanierEntity } from '../../listefavoris/entities/panier.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
import { BoutiqueDomaineEnum } from '../../enums/boutique.domaine.enum';
import { ProduitCategorieEnum } from '../../enums/produit.categorie.enum';
import { Transform } from 'class-transformer';
import { AbonnementStatusEnum } from '../../enums/abonnement.status.enum';
import { ProduitStatusEnum } from '../../enums/produit.status.enum';
@Entity('produit')
export class ProduitEntity extends TimestampEntities {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'enum', enum: ProduitCategorieEnum })
  categorie: string;
  @Column()
  DLC: Date;
  @Column()
  nom: string;
  @Column({
    type: 'bigint',
  })
  codeabare: number;
  @Column()
  prixsansremise: number;
  @Column()
  quantite: number;
  @Column({ type: 'enum', enum: ProduitStatusEnum })
  status: string;
  @Column()
  prixavecremise: number;
  @PrimaryColumn()
  @Column({
    unique: true,
  })
  reference: string;
  @ManyToOne((type) => BoutiqueEntity, (boutique) => boutique.produits, {
    cascade: ['insert', 'update'],
    nullable: true,
    eager: true,
  })
  boutique: BoutiqueEntity;
  @OneToMany(
    (type) => CommentaireEntity,
    (commentaire) => commentaire.produit,
    {
      cascade: true,
      nullable: true,
    },
  )
  commentaires: CommentaireEntity[];
  @OneToMany(
    (type) => EvaluationproduitEntity,
    (evaluationproduit) => evaluationproduit.produit,
    {
      cascade: true,
      nullable: true,
    },
  )
  evaluationsproduits: EvaluationproduitEntity[];
  @OneToMany((type) => CommandeEntity, (commande) => commande.produit, {
    cascade: true,
    nullable: true,
  })
  commandes: CommandeEntity[];
  @ManyToOne((type) => PanierEntity, (panier) => panier.produits, {
    cascade: ['insert', 'update'],
    nullable: true,
    eager: true,
  })
  panier: PanierEntity;
}
