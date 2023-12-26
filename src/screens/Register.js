import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/loginPage.css";

const Register = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.password === details.confirmPassword) {
      console.log("this data can be created");
    } else {
      console.log("passwords doesnot match");
    }
  };

  // useEffect(()=>{
  //   setShowFooter(false)
  // },[setShowFooter])

  return (
    <Container>
      <Row>
        <Col md={6} className="signin-left"></Col>
        <Col md={6} className="log-sign-right">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 className="mb-4">Create an account</h1>
            <Form.Group className="mb-4" style={{ textAlign: "left" }}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={details.name}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-4" style={{ textAlign: "left" }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={details.email}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-4" style={{ textAlign: "left" }}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={details.password}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-4" style={{ textAlign: "left" }}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={details.confirmPassword}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Button type="submit">Register</Button>
            </Form.Group>
            <p>
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
