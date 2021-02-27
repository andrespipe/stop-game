import connectDB from '@stop-game-next-lib/middleware/database';
import httpVerbsHelper from '@stop-game-next-lib/middleware/http-vrb-helper';
import StopGameCollection from '@stop-game-next-lib/schema/game.schema';

const stopGameController = {
  GET: async (req, res) => {
    const connection = await connectDB();
    const stopGame = StopGameCollection(connection);
    const result = await stopGame.find().exec();
    connection.close();
    res.end(JSON.stringify(result));
  },
  POST: async (req, res) => {
    res.end(JSON.stringify({ ans: 'POST' }));
  },
};

export default httpVerbsHelper(stopGameController);
// export default connectDB(handler);
