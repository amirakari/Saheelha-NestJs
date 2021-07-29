import { Injectable, NotFoundException } from '@nestjs/common';
import { AbonnementEntity } from './entities/abonnement.entity';
import { UpdateAbonnementDto } from './DTO/update-abonnement.dto';
import { AddAbonnementDto } from './DTO/Add-abonnement.dto';
import { getConnection, InsertResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProduitEntity } from '../produit/entities/produit.entity';
import * as nodemailer from 'nodemailer';
import { UserEntity } from '../utilisateur/entities/user.entity';

@Injectable()
export class AbonnementService {
  addAbonnementDto: AddAbonnementDto;
  constructor(
    @InjectRepository(AbonnementEntity)
    private userRepository: Repository<AbonnementEntity>,
  ) {}
  async getUsers(): Promise<AbonnementEntity[]> {
    return await this.userRepository.find();
  }
  async addCv1(boutique): Promise<InsertResult> {
    const qb = this.userRepository.createQueryBuilder('abonnement');
    return await qb
      .insert()
      .into(AbonnementEntity)
      .values({
        durée: '1 moi',
        status: 'non payé',
        prix: 10,
        boutique: boutique,
      })
      .execute();
  }
  async addCv2(boutique): Promise<InsertResult> {
    const qb = this.userRepository.createQueryBuilder('abonnement');
    return await qb
      .insert()
      .into(AbonnementEntity)
      .values({
        durée: '3 mois',
        status: 'non payé',
        prix: 20,
        boutique: boutique,
      })
      .execute();
  }
  async addCv3(boutique): Promise<InsertResult> {
    const qb = this.userRepository.createQueryBuilder('abonnement');
    return await qb
      .insert()
      .into(AbonnementEntity)
      .values({
        durée: '12 mois',
        status: 'non payé',
        prix: 100,
        boutique: boutique,
      })
      .execute();
  }
  async findById(id: number) {
    const utilisateur = await this.userRepository.findOne(id);
    if (!utilisateur) {
      throw new NotFoundException(`l'utilisateur d'id ${id} n'existe pas`);
    }
    return utilisateur;
  }
  async updateCv(
    id: number,
    user: UpdateAbonnementDto,
  ): Promise<AbonnementEntity> {
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
  async getAboParBoutique(id: number): Promise<AbonnementEntity[]> {
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .where('produit.boutique.id = :id', { id })
      .getMany();
    return qb;
  }
  async PayeAbo(
    id: number,
    user: UpdateAbonnementDto,
  ): Promise<AbonnementEntity> {
    const newUser = await this.userRepository.preload({
      id,
      ...user,
    });
    if (!newUser) {
      throw new NotFoundException(`le cv d'id ${id} n'existe pas`);
    }
    return await this.userRepository.save(newUser);
  }
  async verifierPaiement(id: number) {
    const datedujour = new Date();
    const status = 'payé';
    const qb = await getConnection()
      .createQueryBuilder()
      .select('abonnement')
      .from(AbonnementEntity, 'abonnement')
      .where('abonnement.boutique.id = :id', { id })
      .andWhere('abonnement.status = :status', { status })
      .getRawMany();
    for (let i = 0; i < qb.length; i++) {
      console.log(qb[i]);
      if (qb[i].abonnement_durée === '1 moi') {
        const d = qb[i].abonnement_createdAt.getDate();
        qb[i].abonnement_createdAt.setMonth(
          qb[i].abonnement_createdAt.getMonth() + +1,
        );
        if (qb[i].abonnement_createdAt.getDate() != d) {
          qb[i].abonnement_createdAt.setDate(0);
        }
        if (qb[i].abonnement_createdAt > datedujour) {
          return true;
        } else {
          return false;
        }
      }
      if (qb[i].abonnement_durée === '3 mois') {
        const d = qb[i].abonnement_createdAt.getDate();
        qb[i].abonnement_createdAt.setMonth(
          qb[i].abonnement_createdAt.getMonth() + +3,
        );
        if (qb[i].abonnement_createdAt.getDate() != d) {
          qb[i].abonnement_createdAt.setDate(0);
        }
        console.log(qb[i].abonnement_createdAt);
        if (qb[i].abonnement_createdAt > datedujour) {
          return true;
        } else {
          return false;
        }
      }
      if (qb[i].abonnement_durée === '12 mois') {
        const d = qb[i].abonnement_createdAt.getDate();
        qb[i].abonnement_createdAt.setMonth(
          qb[i].abonnement_createdAt.getMonth() + +12,
        );
        if (qb[i].abonnement_createdAt.getDate() != d) {
          qb[i].abonnement_createdAt.setDate(0);
        }
        if (qb[i].abonnement_createdAt > datedujour) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
