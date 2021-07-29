import { Repository } from 'typeorm';
import { EvaluationproduitEntity } from './entities/evaluationproduit.entity';
import { AddEvaluationDto } from './DTO/Add-evaluation.dto';
export declare class EvaluationproduitService {
    private userRepository;
    constructor(userRepository: Repository<EvaluationproduitEntity>);
    addCv(evaluation: AddEvaluationDto, note: any, produit: any, user: any): Promise<EvaluationproduitEntity>;
    getProduitParBoutique(id: number): Promise<any>;
}
