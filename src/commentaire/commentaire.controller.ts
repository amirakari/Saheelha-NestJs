import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireEntity } from './entities/commentaire.entity';
import { AddAbonnementDto } from '../abonnement/DTO/Add-abonnement.dto';
import { UpdateAbonnementDto } from '../abonnement/DTO/update-abonnement.dto';
import { AddCommentaireDto } from './DTO/Add-commentaire.dto';
import { UpdateCommentaireDto } from './DTO/update-commentaire.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { Request } from 'express';
import { ProduitEntity } from '../produit/entities/produit.entity';
import { ProduitService } from '../produit/produit.service';

@Controller('commentaire')
export class CommentaireController {
  constructor(
    private userService: CommentaireService,
    private produitService: ProduitService,
  ) {}
  @Get()
  async getAllcvs(): Promise<CommentaireEntity[]> {
    return await this.userService.getUsers();
  }
  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async addCv(
    @Body() addCvDto: AddCommentaireDto,
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CommentaireEntity> {
    const user = request.user;
    const boutique = await this.produitService.findById(id);
    return this.userService.addCv(addCvDto, user, boutique);
  }
  @Get('produit/:id')
  @UseGuards(JwtAuthGuard)
  async getproduitbyId(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommentaireParProduit(id);
  }
  @Patch(':id')
  async updateCv(
    @Body() updateUserDto: UpdateCommentaireDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CommentaireEntity> {
    return await this.userService.updateCv(id, updateUserDto);
  }
  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.softDeleteUser(id);
  }
  @Get('/recover/:id')
  async recoverUtilisateur(@Param('id', ParseIntPipe) id: number) {
    this.userService.restoreUtilisateur(id);
  }
}
