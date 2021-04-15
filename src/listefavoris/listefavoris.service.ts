import { Injectable } from '@nestjs/common';
import { AddProduitDto } from '../produit/DTO/Add-produit.dto';
import { ProduitEntity } from '../produit/entities/produit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PanierEntity } from './entities/panier.entity';
import { AddBoutiqueDto } from '../boutique/DTO/Add-boutique.dto';
import { AddPanierDto } from './DTO/Add-panier.dto';
import { BoutiqueEntity } from '../boutique/entities/boutique.entity';
import { UserEntity } from '../utilisateur/entities/user.entity';

@Injectable()
export class ListefavorisService {
  constructor(
    @InjectRepository(PanierEntity)
    private PanierRepository: Repository<PanierEntity>,
  ) {}
  async addCv(user): Promise<PanierEntity> {
    const newBoutique = this.PanierRepository.create();
    newBoutique.user = user;
    return await this.PanierRepository.save(newBoutique);
  }
  async getPanierParutilisateurConnecté(user) {
    const qb = this.PanierRepository.createQueryBuilder('panier')
      .leftJoin('panier.user', 'user')
      .where('panier.user = :user', { user })
      .getMany();
    return qb;
  }
}
