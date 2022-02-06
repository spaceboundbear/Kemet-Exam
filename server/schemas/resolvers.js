const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },
  },
};

module.exports = resolvers;
