import { IStopGame } from '@stop-game/data';
import { Connection } from 'mongoose';
import StopGameCollection from '@stop-game-next-lib/schema/game.schema';

const StopGameHelper = {
  findById: async (gameId: string, connection: Connection) => {
    const stopGame = StopGameCollection(connection);
    const result = await stopGame.findById(gameId);
    return result;
  },
  dbMapper: (src): IStopGame => ({
    isPrivateGame: src.isPrivateGame,
    language: src.language,
    players: src.players,
    rounds: src.rounds,
    id: src._id,
  }),
  dbMapperStr: (src): string => JSON.stringify(StopGameHelper.dbMapper(src)),
};

export default StopGameHelper;
