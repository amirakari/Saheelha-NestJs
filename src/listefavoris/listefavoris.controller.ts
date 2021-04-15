import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { BoutiqueService } from '../boutique/boutique.service';
import { ListefavorisService } from './listefavoris.service';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { AddBoutiqueDto } from '../boutique/DTO/Add-boutique.dto';
import { Request } from 'express';
import { BoutiqueEntity } from '../boutique/entities/boutique.entity';
import { PanierEntity } from './entities/panier.entity';

@Controller('listefavoris')
export class ListefavorisController {
  constructor(private PanierService: ListefavorisService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async addCv(@Req() request: Request): Promise<PanierEntity> {
    const user = request.user;
    return this.PanierService.addCv(user);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  async getPanierParutilisateurConnecté(@Req() request: Request) {
    const user = request.user;
    return this.PanierService.getPanierParutilisateurConnecté(user);
  }
}
