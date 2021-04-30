import { Module } from '@nestjs/common';
import { CommentaireController } from './commentaire.controller';
import { CommentaireService } from './commentaire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentaireEntity } from './entities/commentaire.entity';
import { ProduitEntity } from '../produit/entities/produit.entity';
import { PanierEntity } from '../listefavoris/entities/panier.entity';
import { EvaluationproduitService } from '../evaluationproduit/evaluationproduit.service';
import { ProduitService } from '../produit/produit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentaireEntity, ProduitEntity, PanierEntity]),
  ],
  controllers: [CommentaireController],
  providers: [CommentaireService, ProduitService],
})
export class CommentaireModule {}
