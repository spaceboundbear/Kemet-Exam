import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

const styles = {
  navbar: {
    backgoundColor: '#0A4179',
  },
};

function Header() {
  return (
    <>
      <Navbar
        style={styles.navbar}
        bg="dark"
        variant="dark"
        className="sticky-top"
      >
        <Container>
          <Navbar.Brand className="d-none d-md-block">
            Kemet Quality Training
          </Navbar.Brand>
          <Nav className="justify-content-end mx-auto mx-md-0">
            <>
              <NavLink className="nav-link" to="home">
                HOME
              </NavLink>
              {Auth.loggedIn() ? (
                <>
                  <NavLink className="nav-link" to="/sections">
                    SECTIONS
                  </NavLink>
                  <NavLink className="nav-link" to="/exams">
                    EXAMS
                  </NavLink>
                  <NavLink className="nav-link" to="/me">
                    PROFILE
                  </NavLink>
                  <Nav.Link onClick={Auth.logout} className="nav-link">
                    SIGN OUT
                  </Nav.Link>
                  <NavLink className="nav-link" to="/admin">
                    ADMIN
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="nav-link" to="/login">
                    LOGIN
                  </NavLink>
                </>
              )}
            </>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
