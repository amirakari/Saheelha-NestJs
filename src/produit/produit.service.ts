import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProduitEntity } from './entities/produit.entity';
import { Like, Raw, Repository } from 'typeorm';
import { AddProduitDto } from './DTO/Add-produit.dto';
import { UpdateProduitDto } from './DTO/update-produit.dto';
import { UserTypeEnum } from '../enums/user.type.enum';
import { User } from '../decorators/user.decorator';
import { Observable } from 'rxjs';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(ProduitEntity)
    private userRepository: Repository<ProduitEntity>,
  ) {}
  async getUsers(): Promise<ProduitEntity[]> {
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .where('produit.DLC > Now()')
      .getMany();
    return qb;
  }
  async getProduitParBoutique(id: number): Promise<ProduitEntity[]> {
    const status = 'à vendre';
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .where('produit.boutique.id = :id', { id })
      .andWhere('produit.status = :status', { status })
      .andWhere('produit.DLC > Now()')
      .getMany();
    return qb;
  }
  async getProduitParBoutiqueDon(id: number): Promise<ProduitEntity[]> {
    const status = 'à donner';
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .where('produit.boutique.id = :id', { id })
      .andWhere('produit.status = :status', { status })
      .andWhere('produit.DLC > Now()')
      .getMany();
    return qb;
  }
  async rechercheParNom(nom: string) {
    return this.userRepository.find({
      where: [
        {
          nom: Like(`%${nom}%`),
          DLC: Raw((alias) => `${alias} > NOW()`),
        },
      ],
    });
  }
  async recherchePartype(type: string) {
    return this.userRepository.find({
      where: [
        {
          categorie: Like(`%${type}%`),
          DLC: Raw((alias) => `${alias} > NOW()`),
        },
      ],
    });
  }
  async rechercheParStatus(status: string) {
    return this.userRepository.find({
      where: [
        {
          status: Like(`%${status}%`),
          DLC: Raw((alias) => `${alias} > NOW()`),
        },
      ],
    });
  }
  async addCv(user: AddProduitDto): Promise<ProduitEntity> {
    return await this.userRepository.save(user);
  }
  async findById(id: number) {
    const utilisateur = await this.userRepository.findOne(id);
    if (!utilisateur) {
      throw new NotFoundException(`l'utilisateur d'id ${id} n'existe pas`);
    }
    return utilisateur;
  }
  async updateCv(id: number, user: UpdateProduitDto): Promise<ProduitEntity> {
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
