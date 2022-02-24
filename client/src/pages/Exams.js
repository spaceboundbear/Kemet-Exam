import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamsCards from '../components/Cards/ExamsCards';

import { useQuery } from '@apollo/client';
import { QUERY_SECTIONS } from '../utils/queries';

const Exams = () => {
  const { loading, data } = useQuery(QUERY_SECTIONS);
  const sections = data?.sections || [];
  return (
    <Container>
      <Card className="bg-dark my-5 border-0 px-5  py-2">
        <h1 className="m-5 fs-1 fw-bold text-light text-center">EXAMS</h1>
        <div className="grid-container">
          {loading ? <div>Loading...</div> : <ExamsCards sections={sections} />}
        </div>
      </Card>
    </Container>
  );
};

export default Exams;
