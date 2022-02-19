const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const Test = require('../models/Test');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    tests: async (parent, args, context) => {
      console.log('test query fired');
      if (context.user) {
        const testData = await Test.find({ student: context.user._id });

        console.log(testData);
        return testData;
      }
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

    addTest: async (parent, { testNumber, testScore }, context) => {
      console.log('addTest Function Fired');
      if (context.user) {
        const test = await Test.create({
          testNumber,
          testScore,
          student: context.user.username,
        });

        console.log('obj assignment passed');

        await User.findOneAndUpdate(
          { id: context.user._id },
          {
            $addToSet: { tests: test._id },
          }
        );

        console.log('find and update executed');

        return test;
      }
    },
  },
};

module.exports = resolvers;
