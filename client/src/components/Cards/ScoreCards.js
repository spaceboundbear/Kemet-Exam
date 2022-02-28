import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ScoreCards = ({ scores }) => {
  return (
    <Col>
      {scores &&
        scores.map((score) => (
          <Card key={score._id} className="bg-light mx-3 my-2">
            <Card.Body>
              <Row>
                <Col sm={7} className="ml-4">
                  <h3>{score.examName}:</h3>
                </Col>
                <Col>
                  <h3>Score: {score.testScore}</h3>
                </Col>
                <Col>
                  <Link to={`/exams/${score.examId}`}>
                    <button className="btn btn-primary">RETAKE EXAM</button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};

export default ScoreCards;

// <h2>{score.examName}</h2>
