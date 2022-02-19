const db = require('../config/connection');
const { Answer } = require('../models');
const examSeeds = require('./examSeeds.json');

db.once('open', async () => {
  try {
    await Answer.deleteMany({});

    await Answer.create(examSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('successfully seeded');
  process.exit(0);
});
