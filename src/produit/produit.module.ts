import { Module } from '@nestjs/common';
import { ProduitController } from './produit.controller';
import { ProduitService } from './produit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitEntity } from './entities/produit.entity';
import { PanierEntity } from '../listefavoris/entities/panier.entity';
import { BoutiqueService } from '../boutique/boutique.service';
import { BoutiqueEntity } from '../boutique/entities/boutique.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProduitEntity, PanierEntity, BoutiqueEntity]),
  ],
  controllers: [ProduitController],
  providers: [ProduitService, BoutiqueService],
})
export class ProduitModule {}
