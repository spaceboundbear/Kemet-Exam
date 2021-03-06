import React, { useState } from 'react';
import {
  Form,
  Button,
  Alert,
  Container,
  Card,
  Row,
  Col,
} from 'react-bootstrap';

import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Signup = (props) => {
  // eslint-disable-next-line
  const [addUser] = useMutation(ADD_USER);
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        email: userFormData.email,
        password: userFormData.password,
        username: userFormData.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    auth.login(token);
  };

  return (
    <>
      <Container>
        <Card className="mt-4 bg-dark">
          <Form
            className="p-5"
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your login credentials!
            </Alert>
            <Form.Group className="text-light p-3">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                name="username"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-light p-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-light p-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required!
              </Form.Control.Feedback>
            </Form.Group>
            <div className="pt-3 px-3">
              <Row>
                <Col className="col-sm-2">
                  <Button
                    disabled={
                      !(
                        userFormData.username &&
                        userFormData.email &&
                        userFormData.password
                      )
                    }
                    type="submit"
                    variant="danger"
                  >
                    Submit
                  </Button>
                </Col>
                <Col className="pl-5">
                  <Link className="float-right" to={'/login'}>
                    <button className="float-right btn btn-primary">
                      Or Login
                    </button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};
export default Signup;
