const { Schema } = require('mongoose');

const testSchema = new Schema({
  testNumber: {
    type: Number,
    required: true,
  },
  testScore: {
    type: Number,
    required: true,
  },
  tests: [this],
});

module.exports = testSchema;
