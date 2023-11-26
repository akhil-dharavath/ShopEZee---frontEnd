import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/loginPage.css";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="log-sign-left">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 className="mb-4">Login to your account</h1>
            <Form.Group className="mb-4" style={{ textAlign: "left" }}>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" style={{ textAlign: "left" }}>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Button type="submit">Login</Button>
            </Form.Group>
            <p>
              Don't have an account? <Link to="/signIn">Create account</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="login-right"></Col>
      </Row>
    </Container>
  );
};

export default Log;
