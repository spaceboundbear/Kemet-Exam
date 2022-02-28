import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ExamsCards = ({ exams }) => {
  return (
    <Col>
      {exams &&
        exams.map((exam) => (
          <Card key={exam._id} className="bg-light mx-3 my-2">
            <Card.Body className="mx-3">
              <Row>
                <Col xs={10}>
                  <h3 className="fw-bold">{exam.examName}</h3>
                </Col>
                <Col>
                  <Link to={`/exams/${exam._id}`}>
                    <button className="btn btn-primary">TAKE EXAM</button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};

export default ExamsCards;
