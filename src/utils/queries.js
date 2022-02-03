import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_SCORE = gql`
  query getScore {
    score {
      _id
      scoreNumber
      scoreStudent
    }
  }
`;
