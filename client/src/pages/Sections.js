import React from 'react';
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionData from '../components/Data/SectionData';
import SectionCards from '../components/Cards/SectionCards';

function Sections() {
  return (
    <Row>
      <Card className="bg-dark my-5 border-0 px-5 py-2">
        <h1 className="m-5 fs-1 fw-bold text-light text-center">SECTIONS</h1>
        <div className="grid-container">
          {SectionData.map((pro) => (
            <SectionCards
              key={pro.id}
              id={pro.id}
              prof={pro.prof}
              name={pro.name}
              desc={pro.desc}
              pPoint={pro.pPoint}
              section={pro.section}
            />
          ))}
        </div>
      </Card>
    </Row>
  );
}

export default Sections;
