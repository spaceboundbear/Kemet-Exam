import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamOneData from '../../components/Data/ExamOneData';
import { useMutation } from '@apollo/client';
import { ADD_TEST } from '../../utils/mutations';

function ExamOne() {
  // eslint-disable-next-line
  const [addTest, { error }] = useMutation(ADD_TEST);
  const [testNumber, setTestNumber] = useState(0);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      return await addTest({
        variables: { testNumber: testNumber, testScore: score },
      });
    } catch (e) {
      console.error(e);
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
              className="mx-auto text-center"
              type="submit"
              onClick={handleSubmit}
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

export default ExamOne;
