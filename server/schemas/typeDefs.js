const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    testScores: [Score]
  }

  type Exam {
    _id: ID
    examName: String
    questionsArray: [Questions]!
  }

  type Questions {
    _id: ID
    questionId: Int
    question: String
    answers: [Answers]!
  }

  type Answers {
    _id: ID
    id: Int
    answerText: String
    isCorrect: Boolean
  }

  type Section {
    _id: ID
    id: Int
    name: String
    prof: String
    desc: String
    pPoint: String
    section: String
  }

  type Score {
    _id: ID
    testNumber: Int
    testScore: Int
    student: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    scores(username: String): [Score]
    score(scoreId: ID!): Score
    sections: [Section]
    exams: [Exam]
    exam(examId: ID!): Exam
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addScore(testScore: Int!, testNumber: Int!): Score
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
