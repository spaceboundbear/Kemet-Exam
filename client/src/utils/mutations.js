import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
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
        firstName
        lastName
        email
        savedScores {
          scoreId
          examId
        }
      }
    }
  }
`;

export const EXAM_ONE_SCORE = gql`
  mutation examOneScore($score: Int!) {
    examOneScore(score: $score) {
      _id
      score
    }
  }
`;
