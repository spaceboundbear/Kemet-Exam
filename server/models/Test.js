const { Schema, model } = require('mongoose');

const testSchema = new Schema({
  student: {
    type: String,
  },
  testNumber: {
    type: Number,
  },
  testScore: {
    type: Number,
  },
});

const Test = model('Test', testSchema);

module.exports = Test;
