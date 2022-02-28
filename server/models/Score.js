const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  examId: {
    type: String,
  },
  examName: {
    type: String,
  },
  testScore: {
    type: Number,
  },
  student: {
    type: String,
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
