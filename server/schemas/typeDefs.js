const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    examScore: Int
    examNumber: Int
  }

  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addScore(examScore: Int, examNumber: Int): User
  }
  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
