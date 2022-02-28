import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

const ScoreCards = ({ scores }) => {
  console.log(scores);

  return (
    <Col>
      {scores &&
        scores.map((score) => (
          <div key={score._id}>
            <h2>{score.testScore}</h2>
            <h2>{score.examName}</h2>
          </div>
        ))}
    </Col>
  );
};

export default ScoreCards;
