const { Schema } = require('mongoose');

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

module.exports = testSchema;
