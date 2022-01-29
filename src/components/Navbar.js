import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="danger" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand className="d-none d-sm-block" to="/about">
            Kemet Quality Training
          </Navbar.Brand>
          <Nav className="justify-content-end  mx-auto mx-md-0">
            <NavLink className="nav-link" to="/home">
              HOME
            </NavLink>
            {Auth.loggedIn() ? (
              <>
                <NavLink className="nav-link" to="/sections">
                  SECTIONS
                </NavLink>
                <NavLink className="nav-link" to="/drive">
                  EXAMS
                </NavLink>
                <NavLink className="nav-link" to="/drive">
                  STUDENTS
                </NavLink>
                <Nav.Link onClick={Auth.logout} className="nav-link">
                  SIGN OUT
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={() => setShowModal(true)}
                  className="nav-link"
                >
                  LOGIN/SIGN UP
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav>
                <Nav.Item>
                  <Nav.Link className="text-danger" eventKey="login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-danger" eventKey="signup">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default Header;
