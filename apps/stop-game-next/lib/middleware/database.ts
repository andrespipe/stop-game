import mongoose from 'mongoose';

const mongoSTR =
  'mongodb+srv://stop_game_db_user:tOLcX0wpfS7Tefsj@cluster0.7ewip.mongodb.net/stop_game_db?retryWrites=true&w=majority';

const connectDB = async () => {
  return await mongoose.createConnection(mongoSTR, {
    useNewUrlParser: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useUnifiedTopology: true,
  });
};

// const connectDB = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     return handler(req, res);
//   }

//   await mongoose.connect(mongoSTR, {
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useNewUrlParser: true,
//   });
//   return handler(req, res);
// };

export default connectDB;
