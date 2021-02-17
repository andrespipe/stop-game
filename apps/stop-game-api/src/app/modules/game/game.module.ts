import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StopGameSchema } from './game.schema';
import { StopGameController } from './game.controller';
import { StopGameService } from './game.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'StopGame', schema: StopGameSchema }],
      'stop_game_db'
    ),
  ],
  controllers: [StopGameController],
  providers: [StopGameService, Logger],
})
export class StopGameModule {}
