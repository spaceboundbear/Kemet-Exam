const { User, Score } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );

        console.log(userData);
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    exams: async (parent, { testNumber, student }, context) => {
      console.log('test query fired');

      const testData = await Score.findOne({ student: context.user._id });

      console.log(testData);

      return testData;
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    saveTest: async (parent, { testNumber, testScore }, context) => {
      console.log('addTest Function Fired');
      if (context.user) {
        const test = await Score.create({
          testNumber,
          testScore,
          student: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { testScores: { testNumber, testScore } } }
        );
        console.log(test._id);
        return test;
      }
    },

    //
  },
};

module.exports = resolvers;
