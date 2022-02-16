import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      tests
    }
  }
`;

export const QUERY_TESTS = gql`
  {
    tests {
      _id
      testNumber
      testScore
    }
  }
`;
