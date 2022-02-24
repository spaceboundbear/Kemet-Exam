const { User, Score, Section, Exam } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('testScores');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('testScores');
    },

    scores: async (parent, { username }) => {
      console.log('scores query fired');
      const params = username ? { username } : {};

      return Score.find(params).sort({ testNumber: -1 });
    },

    score: async (parent, { scoreId }) => {
      console.log('single exam query fired');
      return Score.findOne({ _id: scoreId });
    },

    sections: async () => {
      return Section.find().sort({ id: +1 });
    },

    exams: async (parent, { examId }) => {
      return Exam.find(examId);
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

    addScore: async (parent, { testNumber, testScore }, context) => {
      console.log('addScore Function Fired');

      const foundTest = await Score.findOne({
        student: context.user.username,
        testNumber,
      });

      if (!foundTest) {
        console.log('test not found, creating test');

        const test = await Score.create({
          testNumber,
          testScore,
          student: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { testScores: test._id } }
        );
        console.log(test._id);

        return test;
      } else {
        console.log('test found, updating');

        return await Score.updateOne(
          { _id: foundTest._id },
          { $push: testNumber, testScore }
        );
      }
    },

    //
  },
};

module.exports = resolvers;
