const db = require('../config/connection');
const { Exam, Section } = require('../models');
const examSeeds = require('./examSeeds.json');
const sectionSeeds = require('./sectionSeeds.json');

db.once('open', async () => {
  try {
    await Exam.deleteMany({});
    await Section.deleteMany({});

    await Exam.create(examSeeds);
    await Section.create(sectionSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('successfully seeded');
  process.exit(0);
});
