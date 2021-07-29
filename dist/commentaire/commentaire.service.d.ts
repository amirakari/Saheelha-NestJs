import { CommentaireEntity } from './entities/commentaire.entity';
import { Repository } from 'typeorm';
import { AddCommentaireDto } from './DTO/Add-commentaire.dto';
import { UpdateCommentaireDto } from './DTO/update-commentaire.dto';
export declare class CommentaireService {
    private userRepository;
    constructor(userRepository: Repository<CommentaireEntity>);
    getUsers(): Promise<CommentaireEntity[]>;
    addCv(commentaire: AddCommentaireDto, user: any, produit: any): Promise<CommentaireEntity>;
    findById(id: number): Promise<CommentaireEntity>;
    getCommentaireParProduit(id: number): Promise<CommentaireEntity[]>;
    updateCv(id: number, user: UpdateCommentaireDto): Promise<CommentaireEntity>;
    softDeleteUser(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUtilisateur(id: number): Promise<void>;
}
