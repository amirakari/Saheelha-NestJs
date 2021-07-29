import { ListefavorisService } from './listefavoris.service';
import { Request } from 'express';
import { PanierEntity } from './entities/panier.entity';
export declare class ListefavorisController {
    private PanierService;
    constructor(PanierService: ListefavorisService);
    addCv(request: Request): Promise<PanierEntity>;
    getPanierParutilisateurConnecté(request: Request): Promise<PanierEntity[]>;
}
