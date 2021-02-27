import connectDB from '@stop-game-next-lib/middleware/database';
import httpVerbsHelper from '@stop-game-next-lib/middleware/http-vrb-helper';
import StopGameHelper from '@stop-game-next-lib/middleware/stop-game-helper';

const playerController = {
  GET: async (req, res) => {
    const {
      query: { gameId, nickName },
    } = req;

    const connection = await connectDB();
    const game = await StopGameHelper.findById(gameId, connection);
    if (game) {
      const { players } = game;
      const player = players.find((p) => p.nickName === nickName);
      res.end(JSON.stringify(player));
    } else {
      res.end({});
    }
  },
  DELETE: async (req, res) => {
    const {
      query: { gameId, nickName },
    } = req;

    const connection = await connectDB();
    const game = await StopGameHelper.findById(gameId, connection);

    const { players } = game;
    game.players = players.filter(
      (p) => `${p.nickName}`.toLowerCase() !== `${nickName}`.toLowerCase()
    );
    const savedGame = await game.save();
    res.end(JSON.stringify(savedGame.players));
  },
};

export default httpVerbsHelper(playerController);
