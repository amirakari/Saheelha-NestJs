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
import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
@Entity('Abonnement')
export class AbonnementEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  durée: string;
  @Column()
  status: string;
  @ManyToOne((type) => BoutiqueEntity, (boutique) => boutique.abonnements, {
    cascade: ['insert', 'update'],
    nullable: true,
    eager: true,
  })
  boutique: BoutiqueEntity;
}
