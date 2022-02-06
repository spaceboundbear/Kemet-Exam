import React, { useState } from 'react';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [login, { error }] = useMutation(LOGIN_USER);
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const loginToken = '1234';

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
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
            <Form.Group className="p-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email Required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="p-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your Password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password Required!
              </Form.Control.Feedback>
            </Form.Group>
            <div className="pt-3 px-3">
              <Button
                disabled={!(userFormData.email && userFormData.password)}
                type="submit"
                variant="success"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Login;
