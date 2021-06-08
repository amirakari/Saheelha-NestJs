import { Module } from '@nestjs/common';
import { AbonnementController } from './abonnement.controller';
import { AbonnementService } from './abonnement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonnementEntity } from './entities/abonnement.entity';
import { ProduitService } from '../produit/produit.service';
import { BoutiqueService } from '../boutique/boutique.service';
import { PanierEntity } from '../listefavoris/entities/panier.entity';
import { BoutiqueEntity } from '../boutique/entities/boutique.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AbonnementEntity, BoutiqueEntity])],
  controllers: [AbonnementController],
  providers: [AbonnementService, BoutiqueService],
})
export class AbonnementModule {}
