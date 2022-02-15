import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_TEST = gql`
  mutation addTest($testNumber: Int!, $testScore: Int!) {
    addTest(testNumber: $testNumber, testScore: $testScore) {
      tests {
        _id
        testNumber
        testScore
      }
    }
  }
`;
