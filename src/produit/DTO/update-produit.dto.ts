import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProduitDto {
  @IsOptional()
  id: number;
  @IsOptional()
  @IsString()
  categorie: string;
  @IsOptional()
  @IsString()
  nom: string;
  @IsOptional()
  @IsString()
  reference: string;
  @IsOptional()
  @IsString()
  status: string;
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  prixsansremise: number;
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  quantite: number;
  @IsOptional()
  @IsDateString()
  DLC: Date;
  @IsOptional()
  @IsString()
  photo1: string;
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  prixavecremise: number;
}
