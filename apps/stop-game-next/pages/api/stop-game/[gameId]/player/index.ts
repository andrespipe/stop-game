import connectDB from '@stop-game-next-lib/middleware/database';
import StopGameHelper from '@stop-game-next-lib/middleware/stop-game-helper';
import httpVerbsHelper from '@stop-game-next-lib/middleware/http-vrb-helper';

const stopGameDetailPlayerController = {
  GET: async (req, res) => {
    const connection = await connectDB();
    const {
      query: { gameId },
    } = req;
    const game = await StopGameHelper.findById(gameId, connection);
    if (game) {
      const { players } = game;
      res.end(JSON.stringify(players));
    } else {
      res.end(JSON.stringify([]));
    }
  },
  PUT: async (req, res) => {
    const connection = await connectDB();
    const {
      query: { gameId },
      body,
    } = req;
    const game = await StopGameHelper.findById(gameId, connection);
    const { players } = game;
    const player = JSON.parse(body);
    const playerExist = players.find(
      (p) =>
        `${p.nickName}`.toLowerCase() === `${player.nickName}`.toLowerCase()
    );
    let savedGame;
    if (playerExist) {
      savedGame = game;
    } else {
      game.players.push(player);
      savedGame = await game.save();
    }
    res.end(StopGameHelper.dbMapperStr(savedGame));
  },
};

export default httpVerbsHelper(stopGameDetailPlayerController);
