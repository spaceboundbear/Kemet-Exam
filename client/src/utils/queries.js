import gql from 'graphql-tag';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      tests
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      tests {
        _id
        testNumber
        testScore
        student
      }
    }
  }
`;

export const QUERY_QUESTION_DATA = gql`
  query answers {
    answers {
      _id
      examName
      questionsArray {
        _id
        questionId
        question
        answers {
          _id
          id
          answerText
          isCorrect
        }
      }
    }
  }
`;

export const QUERY_TESTS = gql`
  query tests {
    tests {
      _id
      testNumber
      testScore
    }
  }
`;
