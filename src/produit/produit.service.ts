import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProduitEntity } from './entities/produit.entity';
import { getConnection, Like, Raw, Repository } from 'typeorm';
import { AddProduitDto } from './DTO/Add-produit.dto';
import { UpdateProduitDto } from './DTO/update-produit.dto';
import { UserTypeEnum } from '../enums/user.type.enum';
import { User } from '../decorators/user.decorator';
import { Observable } from 'rxjs';
import { PanierEntity } from '../listefavoris/entities/panier.entity';
import * as nodemailer from 'nodemailer';
import { EvaluationproduitEntity } from '../evaluationproduit/entities/evaluationproduit.entity';
import { UserEntity } from '../utilisateur/entities/user.entity';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class ProduitService {
  confirmLink = '';
  constructor(
    @InjectRepository(PanierEntity)
    private PanierRepository: Repository<PanierEntity>,
    @InjectRepository(ProduitEntity)
    private userRepository: Repository<ProduitEntity>,
  ) {}
  async getUsers(): Promise<ProduitEntity[]> {
    return this.userRepository.find({
      where: [
        {
          DLC: Raw((alias) => `${alias} > NOW()`),
          quantite: Raw((alias) => `${alias} > 0`),
        },
      ],
    });
  }
  async getProduitParBoutique(id: number): Promise<ProduitEntity[]> {
    const status = 'à vendre';
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .where('produit.boutique.id = :id', { id })
      .andWhere('produit.status = :status', { status })
      .andWhere('produit.DLC > Now()')
      .andWhere('produit.quantite > 0')
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
      .andWhere('produit.quantite > 0')
      .getMany();
    return qb;
  }
  async rechercheParLocalisation(adresse: string): Promise<ProduitEntity[]> {
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .leftJoin('produit.boutique', 'boutique')
      .where('boutique.adresse = :adresse', { adresse })
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
  async addCv(user: AddProduitDto, codeabare, boutique) {
    const newBoutique = this.userRepository.create(user);
    newBoutique.codeabare = codeabare;
    newBoutique.boutique = boutique;
    const code = newBoutique.codeabare.toString();
    const now = new Date();
    if (newBoutique.status === 'à vendre') {
      this.confirmLink =
        process.env.Mail +
        `/boutique/${newBoutique.boutique.id}/produitboutique`;
    } else {
      this.confirmLink =
        process.env.Mail +
        `/boutique/${newBoutique.boutique.id}/produitboutique/don`;
    }
    if (
      newBoutique.status === 'à vendre' &&
      code.length == 13 &&
      newBoutique.prixavecremise < newBoutique.prixsansremise
    ) {
      const type = 'user';
      const qb = await getConnection()
        .createQueryBuilder()
        .select('user.mail', 'mail')
        .from(UserEntity, 'user')
        .where('user.type = :type', { type })
        .getRawMany();
      for (let i = 0; i < qb.length; i++) {
        console.log(qb[i].mail);
        nodemailer.createTestAccount((err, account) => {
          if (err) {
            console.log(err);
          }
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'apikey',
              pass: process.env.SENDGRID_API_KEY,
            },
          });
          const message = {
            from: 'Zéro Gaspii <amir.akari@esprit.tn>',
            to: qb[i].mail,
            subject:
              'Un nouveau produit est ajouté dans notre plateforme Zéro Gaspii',
            html: `
        <html>
        <body>
        
        <h3>le ${newBoutique.boutique.domaine} ${newBoutique.boutique.nom} a ajouté un nouveau produit</h3>
        <p>Vous pouvez trouver le produit ${newBoutique.nom} sur <a href="${this.confirmLink}">ce lien</a> 
        </p>
        </body>
        </html>`,
          };
          transporter.sendMail(message, (err, info) => {
            if (err) {
              console.log('Error occurred. ' + err.message);
            }
          });
        });
      }
      return await this.userRepository.save(newBoutique);
    }
    if (newBoutique.status === 'à donner' && code.length == 13) {
      const type = 'user';
      const qb = await getConnection()
        .createQueryBuilder()
        .select('user.mail', 'mail')
        .from(UserEntity, 'user')
        .where('user.type = :type', { type })
        .getRawMany();
      for (let i = 0; i < qb.length; i++) {
        console.log(qb[i].mail);
        nodemailer.createTestAccount((err, account) => {
          if (err) {
            console.log(err);
          }
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'apikey',
              pass: process.env.SENDGRID_API_KEY,
            },
          });
          const message = {
            from: 'Zéro Gaspii <amir.akari@esprit.tn>',
            to: qb[i].mail,
            subject:
              'Un nouveau produit est ajouté dans notre plateforme Zéro Gaspii',
            html: `
        <html>
        <body>
        <h3>le ${newBoutique.boutique.domaine} ${newBoutique.boutique.nom} a ajouté un nouveau produit</h3>
        <p>Vous pouvez trouver le produit ${newBoutique.nom} sur<a href="${this.confirmLink}">ce lien</a> </p>
        </body>
        </html>`,
          };
          transporter.sendMail(message, (err, info) => {
            if (err) {
              console.log('Error occurred. ' + err.message);
            }
          });
        });
      }
      return await this.userRepository.save(newBoutique);
    } else {
      console.log(newBoutique.DLC);
      console.log(now);
      throw new NotFoundException(`l'utilisateur d'id  n'existe pas`);
    }
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
  async findByPanierId(id: number) {
    const qb = this.userRepository
      .createQueryBuilder('produit')
      .leftJoin('produit.panier', 'panier')
      .where('produit.panier.id = :id', { id })
      .getMany();
    return qb;
  }
  async softDeleteUser(id: number) {
    return this.userRepository.softDelete(id);
  }
  async restoreUtilisateur(id: number) {
    this.userRepository.restore(id);
  }
}
