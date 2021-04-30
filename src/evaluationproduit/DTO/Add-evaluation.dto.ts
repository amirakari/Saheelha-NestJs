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

export class AddEvaluationDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  note: number;
}
