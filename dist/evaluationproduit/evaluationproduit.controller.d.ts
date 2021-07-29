import { ProduitService } from '../produit/produit.service';
import { EvaluationproduitService } from './evaluationproduit.service';
import { AddEvaluationDto } from './DTO/Add-evaluation.dto';
import { Request } from 'express';
export declare class EvaluationproduitController {
    private userService;
    private produitService;
    constructor(userService: EvaluationproduitService, produitService: ProduitService);
    addCv(addCvDto: AddEvaluationDto, id: number, note: number, request: Request): Promise<import("./entities/evaluationproduit.entity").EvaluationproduitEntity>;
    getproduitbyId(id: number): Promise<any>;
}
