import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      testScores {
        _id
        examId
        examName
        testScore
        student
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
      testScores {
        _id
        testScore
        student
      }
    }
  }
`;

export const QUERY_SINGLE_EXAM = gql`
  query getSingleExam($examId: ID!) {
    exam(examId: $examId) {
      _id
      examName
      questionsArray {
        _id
        questionId
        question
        answers {
          _id
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
      examId
      examName
      testScore
      student
    }
  }
`;

export const QUERY_SINGLE_SCORE = gql`
  query getSingleScore($scoreId: ID!) {
    score(scoreId: $scoreId) {
      _id
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

export const QUERY_EXAMS = gql`
  query getExams {
    exams {
      _id
      examName
    }
  }
`;
