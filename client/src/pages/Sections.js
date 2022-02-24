import React from 'react';
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionCards from '../components/Cards/SectionCards';

import { useQuery } from '@apollo/client';
import { QUERY_SECTIONS } from '../utils/queries';

function Sections() {
  const { loading, data } = useQuery(QUERY_SECTIONS);
  const sections = data?.sections || [];

  return (
    <Row>
      <Card className="bg-dark my-5 border-0 px-5 py-2">
        <h1 className="m-5 fs-1 fw-bold text-light text-center">SECTIONS</h1>
        <div className="grid-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <SectionCards sections={sections} />
          )}
        </div>
      </Card>
    </Row>
  );
}

export default Sections;
