import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ExamsCards = ({ sections }) => {
  return (
    <Col>
      {sections &&
        sections.map((section) => (
          <Card key={section._id} className="bg-light mx-3 my-2">
            <Card.Body className="mx-3">
              <Row>
                <Col xs={8}>
                  <h3 className="fw-bold">
                    {section.id} {section.name}
                  </h3>
                </Col>
                <Col>
                  <Link to={section.section}>
                    <button className="btn btn-primary mt-1">TAKE EXAM</button>
                  </Link>
                </Col>
                <Col>
                  <h5 className="mt-2">SCORE </h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};

export default ExamsCards;
