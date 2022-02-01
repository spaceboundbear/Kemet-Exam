import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container className="w-auto">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <img src="../../KEMET-LOGO.png" alt="kemet-logo"></img>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
