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

export const ADD_SCORE = gql`
  mutation addScore($examScore: Int!, $examNumber: Int!) {
    addScore(examScore: $examScore, examNumber: $examNumber) {
      user {
        _id
        examScore
        examNumber
      }
    }
  }
`;
