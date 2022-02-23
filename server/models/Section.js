const { Schema, model } = require('mongoose');

const sectionSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  prof: {
    type: String,
  },
  desc: {
    type: String,
  },
  pPoint: {
    type: String,
  },
  section: {
    type: String,
  },
});

const Section = model('Section', sectionSchema);

module.exports = Section;
