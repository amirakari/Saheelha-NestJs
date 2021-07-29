import { CommentaireService } from './commentaire.service';
import { CommentaireEntity } from './entities/commentaire.entity';
import { AddCommentaireDto } from './DTO/Add-commentaire.dto';
import { UpdateCommentaireDto } from './DTO/update-commentaire.dto';
import { Request } from 'express';
import { ProduitService } from '../produit/produit.service';
export declare class CommentaireController {
    private userService;
    private produitService;
    constructor(userService: CommentaireService, produitService: ProduitService);
    getAllcvs(): Promise<CommentaireEntity[]>;
    addCv(addCvDto: AddCommentaireDto, request: Request, id: number): Promise<CommentaireEntity>;
    getproduitbyId(id: number): Promise<CommentaireEntity[]>;
    updateCv(updateUserDto: UpdateCommentaireDto, id: number): Promise<CommentaireEntity>;
    removeUser(id: number): Promise<import("typeorm").UpdateResult>;
    recoverUtilisateur(id: number): Promise<void>;
}
