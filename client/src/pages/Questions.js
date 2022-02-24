import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamOneData from '../components/Data/ExamOneData';
import { useMutation } from '@apollo/client';
import { ADD_SCORE } from '../utils/mutations';

function ExamQuestions() {
  // eslint-disable-next-line
  const [addScore, { error }] = useMutation(ADD_SCORE);
  // eslint-disable-next-line
  const [examNumber, setExamNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < ExamOneData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleSaveTest = async (event) => {
    event.preventDefault();

    console.log('handle save test function fired');

    try {
      const { data } = await addScore({
        variables: {
          testNumber: examNumber,
          testScore: score,
        },
      });
    } catch (err) {
      console.error(err);
      console.log('error');
    }

    console.log(score);
  };

  return (
    <Row>
      {showScore ? (
        <Card className="mt-4 mx-auto">
          <Card.Title className="justify-content-center">
            <p className="text-center">
              Score: {score} out of {ExamOneData.length}
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
              Question {currentQuestion + 1}/{ExamOneData.length}
            </Card.Body>
            <Card.Title className="mb-3 text-center">
              <h5>{ExamOneData[currentQuestion].question}</h5>
            </Card.Title>
          </Card>
          <Card className="mt-3 col-sm-12">
            <Row>
              <Col className="mt-3 text-center">
                {ExamOneData[currentQuestion].answers.map((answerOption) => {
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
