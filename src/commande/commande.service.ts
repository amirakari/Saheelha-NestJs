import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandeEntity } from './entities/commande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Like, Raw, Repository } from 'typeorm';
import { AddCommandeDto } from './DTO/Add-commande.dto';
import { UpdateCommandeDto } from './DTO/update-commande.dto';
import { AddBoutiqueDto } from '../boutique/DTO/Add-boutique.dto';
import { ProduitEntity } from '../produit/entities/produit.entity';
import { EvaluationproduitEntity } from '../evaluationproduit/entities/evaluationproduit.entity';

@Injectable()
export class CommandeService {
  constructor(
    @InjectRepository(CommandeEntity)
    private userRepository: Repository<CommandeEntity>,
  ) {}
  async getUsers(id: number) {
    return this.userRepository.find({
      where: [
        {
          user: Like(`%${id}%`),
        },
      ],
    });
  }
  async addCv(
    boutique: AddCommandeDto,
    user,
    quantite,
    produit,
  ): Promise<CommandeEntity> {
    const newBoutique = this.userRepository.create(boutique);
    newBoutique.date = new Date();
    newBoutique.quantite = quantite;
    newBoutique.produit = produit;
    newBoutique.user = user;
    return await this.userRepository.save(newBoutique);
  }
  async findById(id: number) {
    const utilisateur = await this.userRepository.findOne(id);
    if (!utilisateur) {
      throw new NotFoundException(`l'utilisateur d'id ${id} n'existe pas`);
    }
    return utilisateur;
  }
  async updateCv(id: number, user: UpdateCommandeDto): Promise<CommandeEntity> {
    const newUser = await this.userRepository.preload({
      id,
      ...user,
    });
    if (!newUser) {
      throw new NotFoundException(`le cv d'id ${id} n'existe pas`);
    }
    return await this.userRepository.save(newUser);
  }
  async softDeleteUser(id: number) {
    return this.userRepository.softDelete(id);
  }
  async restoreUtilisateur(id: number) {
    this.userRepository.restore(id);
  }
  async getCommandebyboutique(id: number) {
    return this.userRepository.find({
      where: [
        {
          produit: Like(`%${id}%`),
        },
      ],
    });
  }
  async getCommandeEnMai(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 5')
      .getCount();
    return qb;
  }
  async getCommandeEnJanvier(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 1')
      .getCount();
    return qb;
  }
  async getCommandeEnFevrier(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 2')
      .getCount();
    return qb;
  }
  async getCommandeEnMars(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 3')
      .getCount();
    return qb;
  }
  async getCommandeEnAvril(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 4')
      .getCount();
    return qb;
  }
  async getCommandeEnJuin(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 6')
      .getCount();
    return qb;
  }
  async getCommandeEnJuillet(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 7')
      .getCount();
    return qb;
  }
  async getCommandeEnAout(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 8')
      .getCount();
    return qb;
  }
  async getCommandeEnSeptembre(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 9')
      .getCount();
    return qb;
  }
  async getCommandeEnOctobre(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 10')
      .getCount();
    return qb;
  }
  async getCommandeEnNovembre(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 11')
      .getCount();
    return qb;
  }
  async getCommandeEnDecembre(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('commande')
      .innerJoin('commande.produit', 'produit')
      .innerJoin('produit.boutique', 'boutique')
      .where('boutique.id = :id', { id })
      .andWhere('MONTH(commande.date) = 12')
      .getCount();
    return qb;
  }
}
