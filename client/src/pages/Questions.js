import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SCORE } from '../utils/mutations';
import { QUERY_SINGLE_EXAM } from '../utils/queries';
import { useHistory, useParams } from 'react-router-dom';

function ExamQuestions() {
  const { examId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_EXAM, {
    variables: { examId: examId },
  });

  const styles = {
    header: {
      whiteSpace: 'pre-line',
    },
  };

  const exam = data?.exam || {};
  const questions = exam.questionsArray;

  // eslint-disable-next-line
  const [addScore, { error }] = useMutation(ADD_SCORE);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const history = useHistory();

  const redirect = () => {
    let path = '/exams';
    history.push(path);
  };

  const handleSaveTest = async (event) => {
    event.preventDefault();

    console.log('handle save test function fired');

    try {
      // eslint-disable-next-line
      const { data } = await addScore({
        variables: {
          examId: exam._id,
          testScore: Math.round((score / questions.length) * 100),
          examName: exam.examName,
        },
      });
    } catch (err) {
      console.error(err);
    }

    redirect();
  };

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <Row>
      {showScore ? (
        <Card className="mt-4 mx-auto col-sm-6 text-center">
          <Card.Title className="justify-content-center mt-3">
            <h4 className="text-center">
              Score: {score} out of {questions.length}
            </h4>
            <button
              className="mx-auto btn btn-primary text-center"
              type="submit"
              onClick={handleSaveTest}
            >
              Submit Score
            </button>
          </Card.Title>
        </Card>
      ) : (
        <>
          <Card className="mt-5 col-sm-12">
            <Card.Body className="text-center">
              Question {currentQuestion + 1}/{questions.length}
            </Card.Body>
            <Card.Title className="mb-3 text-center">
              <h5 style={styles.header}>
                {questions[currentQuestion].question}
              </h5>
            </Card.Title>
            <Row>
              <Col className="mt-3 text-center">
                {questions[currentQuestion].answers.map((answerOption) => (
                  <li
                    key={answerOption._id}
                    className="btn btn-primary mb-3 col-sm-8"
                    onClick={() => handleAnswerOption(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </li>
                ))}
              </Col>
            </Row>
          </Card>
        </>
      )}
    </Row>
  );
}

export default ExamQuestions;
