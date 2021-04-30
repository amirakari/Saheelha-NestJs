import { Module } from '@nestjs/common';
import { EvaluationproduitController } from './evaluationproduit.controller';
import { EvaluationproduitService } from './evaluationproduit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitEntity } from '../produit/entities/produit.entity';
import { EvaluationproduitEntity } from './entities/evaluationproduit.entity';
import { ProduitService } from '../produit/produit.service';
import { PanierEntity } from '../listefavoris/entities/panier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EvaluationproduitEntity,
      ProduitEntity,
      PanierEntity,
    ]),
  ],
  controllers: [EvaluationproduitController],
  providers: [EvaluationproduitService, ProduitService],
})
export class EvaluationproduitModule {}
