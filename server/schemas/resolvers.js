const { User, Score, Section, Exam } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        console.log('me queried');
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('testScores');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    users: async () => {
      return User.find().populate('testScores');
    },

    user: async (parent, { username }) => {
      console.log('user queried');
      return User.findOne({ username }).populate('testScores');
    },

    scores: async (parent, { username }) => {
      console.log('scores query fired');
      const params = username ? { username } : {};

      return Score.find(params).sort({});
    },

    score: async (parent, { scoreId }) => {
      console.log('single exam query fired');
      return Score.findOne({ _id: scoreId });
    },

    sections: async () => {
      return Section.find().sort({ id: +1 });
    },

    exams: async () => {
      console.log('exams queried');
      return Exam.find().sort({ _id: +1 });
    },

    exam: async (parent, { examId }) => {
      console.log('single exam queried');
      return Exam.findOne({ _id: examId });
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

    addScore: async (parent, { examId, testScore, examName }, context) => {
      console.log('addScore Function Fired');

      const foundTest = await Score.findOne({
        examId: examId,
        student: context.user.username,
      });

      if (!foundTest) {
        console.log('test not found, creating test');

        const test = await Score.create({
          examId,
          examName,
          testScore,
          student: context.user.username,
        });

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              testScores: { _id: examId, testScore, examName: examName },
            },
          }
        );

        return { test, user };
      }

      console.log('test found, updating');

      const updateScore = await Score.findOneAndUpdate(
        { examId: examId, student: context.user.username },
        { $set: { testScore } }
      );

      const updateUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { testScores: { _id: examId, testScore, examName } } }
      );
      console.log('updating user');

      return { updateScore, updateUser };
    },
  },
};

module.exports = resolvers;
