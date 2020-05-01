import React, { useState, useEffect, useCallback, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import firebaseApp from "../../firebase.js";
import { AuthContext } from "../../FirebaseAuth";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";

// core components
import AuthNavbar from "./AuthNavbar.js";
import AuthFooter from "./AuthFooter.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [email, password]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser);
    return <Redirect to="/dashboard/applicants" />;
  }

  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="7">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                      <div className="text-muted text-center mt-2 mb-0">
                        <h4>MDL Dashboard</h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-4">
                      <Form onSubmit={handleLogin}>
                        <FormGroup>
                          <Label for="email">Email</Label>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="email"
                              name="userEmail"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="password">Password</Label>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="password"
                              name="password"
                              id="password"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              placeholder="password"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            onClick={handleLogin}
                            className="my-4"
                            color="primary"
                            type="button">
                            Login
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default Login;
