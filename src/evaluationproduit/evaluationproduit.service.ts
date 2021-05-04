import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { EvaluationproduitEntity } from './entities/evaluationproduit.entity';
import { AddEvaluationDto } from './DTO/Add-evaluation.dto';
import { ProduitEntity } from '../produit/entities/produit.entity';

@Injectable()
export class EvaluationproduitService {
  constructor(
    @InjectRepository(EvaluationproduitEntity)
    private userRepository: Repository<EvaluationproduitEntity>,
  ) {}
  async addCv(evaluation: AddEvaluationDto, note, produit, user) {
    const newBoutique = this.userRepository.create(evaluation);
    newBoutique.produit = produit;
    newBoutique.user = user;
    newBoutique.note = note;
    return await this.userRepository.save(newBoutique);
  }
  async getProduitParBoutique(id: number) {
    const qb = await getConnection()
      .createQueryBuilder()
      .select('AVG(evaluationproduit.note)', 'avg')
      .from(EvaluationproduitEntity, 'evaluationproduit')
      .leftJoin('evaluationproduit.produit', 'produit')
      .where('evaluationproduit.produit.id = :id', { id })
      .getRawOne();
    return qb.avg;
  }
}
