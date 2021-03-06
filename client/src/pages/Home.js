import React from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/KEMET-LOGO.png';

function Home() {
  return (
    <Container className="w-auto">
      <Image width={300} src={Logo} className="mx-auto d-block mt-5" />
    </Container>
  );
}

export default Home;
