import React from 'react';
import { Card, Row } from 'react-bootstrap';
import SectionData from '../components/SectionData';
import SectionCards from './SectionCards';

function Sections() {
  return (
    <Row>
      <Card className="bg-dark my-5 border-0 px-5 ">
        <Card.Title className="fw-bold my-2 fs-2">Sections</Card.Title>
        <div className="grid-container d-flex flex-wrap">
          {SectionData.map((pro) => (
            <SectionCards
              key={pro.id}
              id={pro.id}
              prof={pro.prof}
              name={pro.name}
              desc={pro.desc}
              pPoint={pro.pPoint}
            />
          ))}
        </div>
      </Card>
    </Row>
  );
}

export default Sections;
