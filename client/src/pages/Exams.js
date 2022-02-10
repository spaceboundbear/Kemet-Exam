import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionData from '../components/Data/SectionData';
import ExamsCards from '../components/Cards/ExamsCards';

function Exams() {
  return (
    <Container>
      <Card className="bg-dark my-5 border-0 px-5  py-2">
        <h1 className="m-5 fs-1 fw-bold text-light text-center">EXAMS</h1>
        <div className="grid-container">
          {SectionData.map((pro) => (
            <ExamsCards
              key={pro.id}
              id={pro.id}
              name={pro.name}
              section={pro.section}
            />
          ))}
        </div>
      </Card>
    </Container>
  );
}

export default Exams;
