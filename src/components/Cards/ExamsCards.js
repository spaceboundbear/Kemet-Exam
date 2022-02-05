import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ExamsCards(props) {
  return (
    <Col>
      <Card className="bg-light mx-3 my-2">
        <Card.Body className="mx-3">
          <Row>
            <Col xs={9}>
              <h3 className="fw-bold">
                {props.id}. {props.name}
              </h3>
            </Col>
            <Col>
              <Link to={props.section}>
                <button className="btn btn-primary mt-1">TAKE EXAM</button>
              </Link>
            </Col>
            <Col>
              <h5 className="mt-2">SCORE:</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ExamsCards;
