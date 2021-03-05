import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../utilisateur/entities/user.entity';
import { ProduitEntity } from '../../produit/entities/produit.entity';
import { AbonnementEntity } from '../../abonnement/entities/abonnement.entity';
@Entity('boutique')
export class BoutiqueEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
  @Column()
  adresse: string;
  @Column()
  photo: string;
  @Column()
  horaire: string;
  @Column()
  visite: string;
  @PrimaryColumn()
  @Column({
    unique: true,
  })
  mailprofessionnelle: string;
  @Column()
  domaine: string;
  @ManyToOne((type) => UserEntity, (user) => user.boutiques, {
    cascade: ['insert', 'update'],
    nullable: true,
    eager: true,
  })
  user: UserEntity;
  @OneToMany((type) => ProduitEntity, (produit) => produit.boutique, {
    cascade: true,
    nullable: true,
  })
  produits: ProduitEntity[];
  @OneToMany((type) => AbonnementEntity, (abonnement) => abonnement.boutique, {
    cascade: true,
    nullable: true,
  })
  abonnements: AbonnementEntity[];
}
