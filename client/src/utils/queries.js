import gql from 'graphql-tag';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      testScores {
        _id
        testNumber
        testScore
      }
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

export const QUERY_EXAM_DATA = gql`
  query getExams {
    exams {
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

export const QUERY_SCORES = gql`
  query getScores {
    scores {
      _id
      testNumber
      testScore
      student
    }
  }
`;

export const QUERY_SINGLE_SCORE = gql`
  query getSingleScore($scoreId: ID!) {
    score(scoreId: $scoreId) {
      _id
      testNumber
      testScore
      student
    }
  }
`;

export const QUERY_SECTIONS = gql`
  query getSections {
    sections {
      _id
      name
      prof
      desc
      pPoint
      section
    }
  }
`;
