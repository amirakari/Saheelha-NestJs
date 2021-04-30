import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandeEntity } from './entities/commande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Raw, Repository } from 'typeorm';
import { AddCommandeDto } from './DTO/Add-commande.dto';
import { UpdateCommandeDto } from './DTO/update-commande.dto';
import { AddBoutiqueDto } from '../boutique/DTO/Add-boutique.dto';

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
}
