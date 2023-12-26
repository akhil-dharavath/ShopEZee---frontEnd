import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/loginPage.css";
import Spinner from '../../components/Spinner'

const Login = ({ login, loading, loginFailure, handleLogin }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const route = useLocation();
  const address = route.pathname.slice(6);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(details, address);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (login && login !== "") {
      localStorage.setItem("token", login);
      navigate("/");
    }
    // eslint-disable-next-line
  }, [login]);

  if(loading){
    return <Spinner/>
  }

  // if(loginFailure){
  //   return alert('Invalid login Credentials')
  // }

  return (
    <Container>
      <Row>
        <Col md={6} className="login-left"></Col>
        <Col md={6} className="log-sign-right">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 className="mb-4">Login to your account</h1>
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
            <Form.Group className="mb-4">
              <Button type="submit">Login</Button>
            </Form.Group>
            <p>
              Don't have an account?{" "}
              <Link to="/auth/register">Create account</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
