const { Schema, model } = require('mongoose');

const testSchema = new Schema({
  testNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  testScore: {
    type: Number,
    required: true,
  },
});

const Test = model('Test', testSchema);

module.exports = Test;
