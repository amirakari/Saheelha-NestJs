import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AddCommentaireDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}
