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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BoutiqueService } from './boutique.service';
import { BoutiqueEntity } from './entities/boutique.entity';
import { AddBoutiqueDto } from './DTO/Add-boutique.dto';
import { UpdateBoutiqueDto } from './DTO/update-boutique.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { Request } from 'express';
import { User } from '../decorators/user.decorator';
import { Observable, of } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
@Controller('boutique')
export class BoutiqueController {
  constructor(private boutiqueService: BoutiqueService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/images',
      }),
    }),
  )
  uploadfile(@UploadedFile() file: Express.Multer.File): Observable<any> {
    return of({ imagePath: file.path });
  }
  @Get()
  async getAllcvs(): Promise<BoutiqueEntity[]> {
    return await this.boutiqueService.getBoutique();
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  async addCv(
    @Body() addCvDto: AddBoutiqueDto,
    @Req() request: Request,
  ): Promise<BoutiqueEntity> {
    const user = request.user;
    return this.boutiqueService.addBoutique(addCvDto, user);
  }
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateCv(
    @Body() updateUserDto: UpdateBoutiqueDto,
    @Param('id', ParseIntPipe) id: number,
    @User() user,
  ): Promise<BoutiqueEntity> {
    return await this.boutiqueService.updateBoutique(id, updateUserDto, user);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async removeUser(@Param('id', ParseIntPipe) id: number, @User() user) {
    return this.boutiqueService.softDeleteBoutique(id, user);
  }
  @Get('/recover/:id')
  @UseGuards(JwtAuthGuard)
  async recoverUtilisateur(
    @Param('id', ParseIntPipe) id: number,
    @User() user,
  ) {
    this.boutiqueService.restoreUtilisateur(id, user);
  }
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getBoutique(
    @Param('id', ParseIntPipe) id,
    @User() user,
  ): Promise<BoutiqueEntity> {
    return this.boutiqueService.findById(id, user);
  }
}
