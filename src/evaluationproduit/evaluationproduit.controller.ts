import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { ProduitService } from '../produit/produit.service';
import { EvaluationproduitService } from './evaluationproduit.service';
import { AddEvaluationDto } from './DTO/Add-evaluation.dto';
import { Request } from 'express';
import { ProduitEntity } from '../produit/entities/produit.entity';

@Controller('evaluationproduit')
export class EvaluationproduitController {
  constructor(
    private userService: EvaluationproduitService,
    private produitService: ProduitService,
  ) {}
  @Post(':id/:note')
  @UseGuards(JwtAuthGuard)
  async addCv(
    @Body() addCvDto: AddEvaluationDto,
    @Param('id', ParseIntPipe) id: number,
    @Param('note', ParseIntPipe) note: number,
    @Req() request: Request,
  ) {
    const boutique = await this.produitService.findById(id);
    console.log(boutique);
    const user = request.user;
    return this.userService.addCv(addCvDto, note, boutique, user);
  }
  @Get('produit/:id')
  @UseGuards(JwtAuthGuard)
  async getproduitbyId(@Param('id', ParseIntPipe) id: number) {
    const evalution = await this.userService.getProduitParBoutique(id);
    return evalution;
  }
}
