const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    tests: [Test]!
  }

  type Test {
    _id: ID
    testNumber: Int!
    testScore: Int!
  }

  type Query {
    me: User
    tests: [Test]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTest(testNumber: Int!, testScore: Int!): Test
  }

  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
