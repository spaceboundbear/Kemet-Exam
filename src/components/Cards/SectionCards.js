import React from 'react';
import { Card, Col } from 'react-bootstrap';

function SectionCards(props) {
  return (
    <Col>
      <Card className="bg-light mx-3 my-2">
        <Card.Body className="mx-3">
          <Card.Text>
            <Card.Link pathname={props.section}>{props.name}</Card.Link>
            <h5>{props.prof}</h5>
            <p>{props.desc}</p>
            Slides: {props.pPoint}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SectionCards;
