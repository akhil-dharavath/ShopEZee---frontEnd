import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/loginPage.css";
import { useSnackbar } from "notistack";

const Login = ({ login, handleLogin,loginFailure }) => {
  // text fields
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  // updating the text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // get address wheather login or register
  const address = useLocation().pathname.slice(6);
  const navigate = useNavigate(); // navigate

  // import enqueueSnackbar for showing error message
  const { enqueueSnackbar } = useSnackbar();

  // on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // check the rext fields are not empty
    if (details.email === "" || details.password === "") {
      enqueueSnackbar("Please enter required fields!", { variant: "error" });
      return;
    }

    handleLogin(details, address); // send login details to api including address
  };

  useEffect(() => {
    if (login && login !== "") {
      localStorage.setItem("token", login);
      navigate("/"); // if logged in navigate to Home Page
    }
    // eslint-disable-next-line
  }, [login]);
  
  useEffect(()=>{
    loginFailure!=="" && enqueueSnackbar("Invalid login credentials!", { variant: "error" });
    // eslint-disable-next-line
  },[loginFailure])

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
