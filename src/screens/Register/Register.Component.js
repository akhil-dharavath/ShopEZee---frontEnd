import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/loginPage.css";
import { useSnackbar } from "notistack";

const Register = ({ login, handleLogin, loginFailure }) => {
  // text fields
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // updating text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // get address whether login or register
  const address = useLocation().pathname.slice(6);
  const navigate = useNavigate(); // navigate

  // import enqueueSnackbar for showing error message
  const { enqueueSnackbar } = useSnackbar();

  // on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = details;
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      enqueueSnackbar("Please enter required fields!", { variant: "error" }); // trigger when empty
      return;
    }
    if (password === confirmPassword) {
      handleLogin(details, address); // send register details to api including address
    } else {
      enqueueSnackbar("passwords are not matched!", { variant: "error" }); // passwords not matched
    }
  };

  useEffect(() => {
    if (login && login !== "") {
      localStorage.setItem("token", login);
      navigate("/"); // if register is successful navigate to Home Page
    }
    // eslint-disable-next-line
  }, [login]);

  useEffect(() => {
    loginFailure !== "" &&
      enqueueSnackbar(loginFailure.response.data.message, { variant: "error" }); // error while registering
    // eslint-disable-next-line
  }, [loginFailure]);

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
                name="username"
                value={details.username}
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
  );
};

export default Register;
