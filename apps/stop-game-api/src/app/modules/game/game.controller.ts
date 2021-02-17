import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { IMovement, INewStopGame, IPlayer, IStopGame } from '@stop-game/data';
// import { mongoUUID } from '@stop-game/utils';
import { StopGameService } from './game.service';

@Controller('stop-game')
export class StopGameController {
  constructor(private stopGameService: StopGameService) {}

  @Post()
  async newGame(@Body() newGame: INewStopGame): Promise<IStopGame> {
    const result = await this.stopGameService.create(newGame);
    return result;
  }

  @Get()
  async allGames(): Promise<IStopGame[]> {
    const result = await this.stopGameService.findAll();
    return result;
  }

  @Get('privateGames')
  async allPrivateGames(): Promise<IStopGame[]> {
    const result = await this.stopGameService.findByPrivacy(true);
    return result;
  }

  @Get('publicGames')
  async allPublicGames(): Promise<IStopGame[]> {
    const result = await this.stopGameService.findByPrivacy(false);
    return result;
  }

  @Get(':gameId')
  async findGame(@Param('gameId') gameId: string): Promise<IStopGame> {
    const result = await this.stopGameService.findGame(gameId);
    return result;
  }

  @Put()
  async updateGame(@Body() game: IStopGame): Promise<IStopGame> {
    const result = await this.stopGameService.updateGame(game);
    return result;
  }

  @Put(':gameId/addPlayer')
  async addPlayer(
    @Body() player: IPlayer,
    @Param('gameId') gameId
  ): Promise<IStopGame> {
    const result = await this.stopGameService.addPlayer(gameId, player);
    return result;
  }

  @Get(':gameId/player/:nickname')
  async findPlayer(
    @Param('gameId') gameId: string,
    @Param('nickname') nickname: string
  ): Promise<IPlayer> {
    const result = await this.stopGameService.findPlayer(gameId, nickname);
    return result;
  }

  @Put(':gameId/player/:nikName/movement/:round')
  async addMovement(
    @Param('gameId') gameId,
    @Param('nickName') nickName,
    @Param('round') round,
    @Body() movement: IMovement
  ): Promise<void> {
    const result = await this.stopGameService.addMovement(movement);
    return result;
  }
}
