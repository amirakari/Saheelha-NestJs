import { Module } from '@nestjs/common';
import { CommandeController } from './commande.controller';
import { CommandeService } from './commande.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandeEntity } from './entities/commande.entity';
import { ProduitEntity } from '../produit/entities/produit.entity';
import { PanierEntity } from '../listefavoris/entities/panier.entity';
import { EvaluationproduitService } from '../evaluationproduit/evaluationproduit.service';
import { ProduitService } from '../produit/produit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommandeEntity, ProduitEntity, PanierEntity]),
  ],
  controllers: [CommandeController],
  providers: [CommandeService, ProduitService],
})
export class CommandeModule {}
