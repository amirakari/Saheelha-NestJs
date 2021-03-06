import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EvaluationproduitEntity } from '../../evaluationproduit/entities/evaluationproduit.entity';
import { ProduitEntity } from '../../produit/entities/produit.entity';
import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { UserEntity } from '../../utilisateur/entities/user.entity';
@Entity('listefavoris')
export class ListefavorisEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany((type) => ProduitEntity, (produit) => produit.listefavoris, {
    cascade: true,
    nullable: true,
  })
  produits: ProduitEntity[];
  @OneToOne((type) => UserEntity, (user) => user.listefavoris, {
    cascade: ['insert', 'update'],
    nullable: true,
  })
  user: UserEntity[];
}
