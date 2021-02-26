import connectDB from '@stop-game-next-lib/middleware/database';
import StopGameCollection from '@stop-game-next-lib/schema/game.schema';

const stopGameController = {
  GET: async (req, res) => {
    try {
      const connection = await connectDB();
      const stopGame = StopGameCollection(connection);
      const result = await stopGame.find().exec();
      connection.close();
      res.end(JSON.stringify(result));
    } catch (error) {
      res.end(JSON.stringify({ error }));
    }
  },
  POST: async (req, res) => {
    res.end(JSON.stringify({ ans: 'POST' }));
  },
};

const handler = async (req, res) => {
  const { method } = req;
  await stopGameController[method](req, res);
};

// export default connectDB(handler);
export default handler;
