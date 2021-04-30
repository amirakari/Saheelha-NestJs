import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { BoutiqueModule } from './boutique/boutique.module';
import { ProduitModule } from './produit/produit.module';
import { AbonnementModule } from './abonnement/abonnement.module';
import { CommandeModule } from './commande/commande.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { ListefavorisModule } from './listefavoris/listefavoris.module';
import * as dotenv from 'dotenv';
import { UserEntity } from './utilisateur/entities/user.entity';
import { AbonnementEntity } from './abonnement/entities/abonnement.entity';
import { BoutiqueEntity } from './boutique/entities/boutique.entity';
import { CommandeEntity } from './commande/entities/commande.entity';
import { CommentaireEntity } from './commentaire/entities/commentaire.entity';
import { ProduitEntity } from './produit/entities/produit.entity';
import { EvaluationproduitEntity } from './evaluationproduit/entities/evaluationproduit.entity';
import { PanierEntity } from './listefavoris/entities/panier.entity';
import { EvaluationproduitModule } from './evaluationproduit/evaluationproduit.module';
import { JwtStrategy } from './utilisateur/strategy/passport-jwt.strategy';
import { GoogleStrategy } from './google.strategy';
import { Strategy } from 'passport-jwt';
import { FirstMiddleware } from './middlewares/first.middleware';
import { MailModule } from './mail/mail.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        UserEntity,
        AbonnementEntity,
        BoutiqueEntity,
        CommandeEntity,
        CommentaireEntity,
        ProduitEntity,
        EvaluationproduitEntity,
        PanierEntity,
      ],
      synchronize: false,
    }),
    UtilisateurModule,
    BoutiqueModule,
    ProduitModule,
    AbonnementModule,
    CommandeModule,
    CommentaireModule,
    ListefavorisModule,
    EvaluationproduitModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(FirstMiddleware).forRoutes('');
  }
}
