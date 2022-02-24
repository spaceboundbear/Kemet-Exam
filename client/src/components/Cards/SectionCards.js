import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SectionCards = ({ sections }) => {
  return (
    <Col>
      {sections &&
        sections.map((section) => (
          <Card key={section._id} className="bg-light mx-3 my-2">
            <Card.Body className="mx-3">
              <h2 className="fw-bold">{section.name}</h2>
              <h5>{section.prof}</h5>
              <p>{section.desc}</p>
              Pages: {section.pPoint}
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};

export default SectionCards;
