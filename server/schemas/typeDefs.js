const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    tests: [Test]
  }

  type Test {
    _id: ID
    testNumber: Int!
    testScore: Int!
    tests: [Test]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTest(testNumber: Int!, testScore: Int!): User
  }

  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
