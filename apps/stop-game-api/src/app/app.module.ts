import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { StopGameModule } from './modules/game/game.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from 'process';

const dbURL =
  'mongodb+srv://stop_game_db_user:sHkNX2KYSBlF6M9e@cluster0.7ewip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local'],
    }),
    // MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
    //   connectionName: 'stop_game_db',
    // }),
    MongooseModule.forRoot(dbURL, {
      connectionName: 'stop_game_db',
    }),
    StopGameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
