import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand className="d-none d-sm-block">
            Kemet Quality Training
          </Navbar.Brand>
          <Nav className="justify-content-end mx-auto mx-md-0">
            <>
              <NavLink className="nav-link" to="home">
                HOME
              </NavLink>
              <NavLink className="nav-link" to="/sections">
                SECTIONS
              </NavLink>
              <NavLink className="nav-link" to="/exams">
                EXAMS
              </NavLink>
              <NavLink className="nav-link" to="/students">
                STUDENTS
              </NavLink>
              <Nav.Link className="nav-link">SIGN OUT</Nav.Link>
            </>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
