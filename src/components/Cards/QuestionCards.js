import React from 'react';
import { Card, Col } from 'react-bootstrap';

function QuestionCards(props) {
  return (
    <Col>
      <Card className="bg-light mx-3 my-2">
        <Card.Body className="mx-3">
          <h2>{props.name}</h2>
          <h5>{props.prof}</h5>
          <p>{props.desc}</p>
          Slides: {props.pPoint}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default QuestionCards;
