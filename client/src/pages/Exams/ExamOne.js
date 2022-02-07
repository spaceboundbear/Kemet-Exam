import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamOneData from '../../components/Data/ExamOneData';

function ExamOne() {
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
  };

  return (
    <Row>
      {showScore ? (
        <Card className="mt-4">
          <Card.Title>
            Score: {score} out of {ExamOneData.length}
            <button type="submit" onClick={handleSubmit}>
              Submit Score
            </button>
          </Card.Title>
        </Card>
      ) : (
        <>
          <Card className="mt-5">
            <Card.Body className="text-center">
              Question {currentQuestion + 1}/{ExamOneData.length}
            </Card.Body>
            <Card.Title className="mb-3 text-center">
              {ExamOneData[currentQuestion].question}
            </Card.Title>
            <Row>
              <Col className="text-center">
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
