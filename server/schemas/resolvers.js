const { User, Answer } = require('../models');
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

        console.log(userData);
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

      const foundTest = await Test.findOne({ testNumber });
      const test = await Test.updateOne({
        testNumber,
        testScore,
        student: context.user.username,
      });

      if (foundTest) {
        console.log('test found');

        await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              tests: context.user._id,
            },
          }
        );

        console.log('test updated');
      } else {
        console.log('no test found, creating new test');

        await Test.create({
          testNumber: testNumber,
          testScore,
          student: context.user.username,
        });
        console.log('new test created');
      }
    },
  },
};

module.exports = resolvers;
