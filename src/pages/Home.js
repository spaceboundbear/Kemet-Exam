import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/KEMET-LOGO.png';

function Home() {
  return (
    <Container className="w-auto">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <Image width={300} src={Logo} />
          <p>home</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
