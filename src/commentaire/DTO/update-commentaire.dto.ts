import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCommentaireDto {
  @IsOptional()
  @IsString()
  message: string;
}
