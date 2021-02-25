import mongoose from 'mongoose';

const stopGame = new mongoose.Schema({
  id: {
    type: String,
  },
  isPrivateGame: {
    type: Boolean,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  players: {
    type: [],
    required: true,
  },
  rounds: {
    type: Number,
    required: true,
  },
});

const StopGameCollection = (connection) => {
  return connection.model('StopGame', stopGame);
};

export default StopGameCollection;
