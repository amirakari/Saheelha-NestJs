import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';

export class AddProduitDto {
  @IsNotEmpty()
  @IsString()
  categorie: string;
  @IsNotEmpty()
  @IsString()
  nom: string;
  @IsNotEmpty()
  @IsString()
  reference: string;
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  prixsansremise: number;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  quantite: number;
  @IsNotEmpty()
  @IsDateString()
  DLC: Date;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  prixavecremise: number;
}
