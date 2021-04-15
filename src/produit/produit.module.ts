import { Module } from '@nestjs/common';
import { ProduitController } from './produit.controller';
import { ProduitService } from './produit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitEntity } from './entities/produit.entity';
import { PanierEntity } from '../listefavoris/entities/panier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitEntity, PanierEntity])],
  controllers: [ProduitController],
  providers: [ProduitService],
})
export class ProduitModule {}
