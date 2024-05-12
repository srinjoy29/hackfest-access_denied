import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';


const Login = () => {
  const loginwithgoogle = ()=>{
    window.open("http://localhost:6010/auth/google/callback","_self")
}

  return (
    <Container className="login-page">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center">Login</h1>
          <Form className="login-form">
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3">
              Login
            </Button>

            <p className="message">Not registered? <HashLink to="#">Create an account</HashLink></p>
          </Form>
          <Button variant="light" className="login-with-google-btn" onClick={loginwithgoogle}>
            Sign In With Google
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;
