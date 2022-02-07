const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Run {
    runId: String
    date: String
    duration: Int
    bump: Int
    left: Int
    right: Int
    stop: Int
  }
  type User {
    _id: ID
    username: String
    email: String
    runCount: Int
    savedRuns: [Run]
  }

  input runInput {
    runId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Auth {
    token: ID
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRun(input: runInput): User
    removeRun(runId: String!): User
  }
`;

module.exports = typeDefs;
