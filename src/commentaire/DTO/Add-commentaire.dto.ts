import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserEntity } from '../../utilisateur/entities/user.entity';

export class AddCommentaireDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}
