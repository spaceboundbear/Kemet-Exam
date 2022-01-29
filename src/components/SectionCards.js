import React from 'react';
import { Card, Col } from 'react-bootstrap';

function SectionCards(props) {
  return (
    <Col>
      <Card className="border-0 grid-item d-flex bg-dark flex-row text-center">
        <Card.Body>
          <Card.Text>
            <h3 className="mt-2">{props.name}</h3>
            <h5>{props.prof}</h5>
            <p>{props.desc}</p>
            <p>Slides: {props.pPoint}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SectionCards;
