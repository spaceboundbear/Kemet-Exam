import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_TESTS = gql`
  query tests($_id: ID) {
    tests(_id: $_id) {
      _id
      testNumber
      testScore
    }
  }
`;
