import connectDB from '@stop-game-next-lib/middleware/database';
import StopGameHelper from '@stop-game-next-lib/middleware/stop-game-helper';
import httpVerbsHelper from '@stop-game-next-lib/middleware/http-vrb-helper';

const stopGameDetailController = {
  GET: async (req, res) => {
    const {
      query: { gameId },
    } = req;
    console.log(gameId);
    const connection = await connectDB();
    const result = await StopGameHelper.findById(gameId, connection);
    res.end(StopGameHelper.dbMapperStr(result));
  },
  PUT: async (req, res) => {
    const connection = await connectDB();
    const {
      query: { gameId },
      body,
    } = req;
    console.log(req.query, { body });
    const result = await StopGameHelper.findById(gameId, connection);
    result.isPrivateGame = body.isPrivateGame;
    result.language = body.language;
    result.players = body.players;
    result.rounds = body.rounds;
    const savedGame = await result.save();
    res.end(JSON.stringify({ response: savedGame, request: { gameId, body } }));
  },
};

export default httpVerbsHelper(stopGameDetailController);
