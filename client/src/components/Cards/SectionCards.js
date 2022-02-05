import React from 'react';
import { Card, Col } from 'react-bootstrap';

function SectionCards(props) {
  return (
    <Col>
      <Card className="bg-light mx-3 my-2">
        <Card.Body className="mx-3">
          <h2 className="fw-bold">{props.name}</h2>
          <h5>{props.prof}</h5>
          <p>{props.desc}</p>
          Pages: {props.pPoint}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SectionCards;
