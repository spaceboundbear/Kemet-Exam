const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  testNumber: {
    type: Number,
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
