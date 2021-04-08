import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProduitEntity } from '../../produit/entities/produit.entity';
import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
@Entity('panier')
export class PanierEntity extends TimestampEntities {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantite: number;
  @OneToMany((type) => ProduitEntity, (produit) => produit.panier, {
    cascade: true,
    nullable: true,
  })
  produits: ProduitEntity[];
  @ManyToOne((type) => UserEntity, (user) => user.panier, {
    cascade: ['insert', 'update'],
    nullable: true,
    eager: true,
  })
  user: UserEntity[];
}
