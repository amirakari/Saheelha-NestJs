import { Repository } from 'typeorm';
import { PanierEntity } from './entities/panier.entity';
export declare class ListefavorisService {
    private PanierRepository;
    constructor(PanierRepository: Repository<PanierEntity>);
    addCv(user: any): Promise<PanierEntity>;
    getPanierParutilisateurConnecté(user: any): Promise<PanierEntity[]>;
}
