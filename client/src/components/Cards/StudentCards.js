import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, Row } from 'react-bootstrap';

const StudentCards = ({ users }) => {
  return (
    <Col>
      {users &&
        users.map((user) => (
          <Card key={user._id}>
            <Card.Body className="mx-1">
              <Row>
                <Col xs={10}>
                  <h3 className="fw-bold">{user.username}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};

export default StudentCards;
