import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SCORE } from '../utils/mutations';
import { QUERY_SINGLE_EXAM } from '../utils/queries';
import { useParams } from 'react-router-dom';

function ExamQuestions() {
  const { examId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_EXAM, {
    variables: { examId: examId },
  });

  const exam = data?.exam || {};
  const questions = exam.questionsArray;

  // eslint-disable-next-line
  const [addScore, { error }] = useMutation(ADD_SCORE);
  // eslint-disable-next-line
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

  const handleSaveTest = async (event) => {
    event.preventDefault();

    console.log('handle save test function fired');

    try {
      // eslint-disable-next-line
      const { data } = await addScore({
        variables: {
          examId: exam._id,
          testScore: score,
        },
      });
    } catch (err) {
      console.error(err);
      console.log(data);
    }

    console.log(score);
  };

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <Row>
      {showScore ? (
        <Card className="mt-4 mx-auto">
          <Card.Title className="justify-content-center">
            <p className="text-center">
              Score: {score} out of {questions.length}
            </p>
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
              <h5>{questions[currentQuestion].question}</h5>
            </Card.Title>
          </Card>
          <Card className="mt-3 col-sm-12">
            <Row>
              <Col className="mt-3 text-center">
                {questions[currentQuestion].answers.map((answerOption) => {
                  return (
                    <li
                      key={answerOption.id}
                      className="btn btn-primary mb-3 col-sm-8"
                      onClick={() => handleAnswerOption(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </li>
                  );
                })}
              </Col>
            </Row>
          </Card>
        </>
      )}
    </Row>
  );
}

export default ExamQuestions;
