const { Schema, model } = require('mongoose');

const AnswerSchema = new Schema({
  examName: {
    type: String,
    required: true,
    unique: true,
  },
  questionsArray: [
    {
      questionId: {
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answers: [
        {
          id: {
            type: Number,
            required: true,
          },
          answerText: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
          },
        },
      ],
    },
  ],
});

const Answer = model('Answer', AnswerSchema);

module.exports = Answer;
