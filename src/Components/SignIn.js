import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Form, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from '../LogoCouchUp.jpg';
import HomeNavBar from './HomeNavBar';

class SignIn extends Component {
    render() {
        return (
            <div>
                <center><img src={logo} style={{ width: 450, height: 150 }} /></center>
                <HomeNavBar />
                <Container>
                    <br />
                    <h1><center>SIGN IN</center></h1>
                    <br />
                    <Form>
                        <Row form>
                            <Col></Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                </FormGroup>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br/>
                        <Row form>
                            <Col></Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                </FormGroup>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Form>
                    <br/>
                    <center>
                        <Link to="/Store">
                            <Button color="success">Sign in</Button>
                        </Link>
                    </center>
                </Container>
            </div>
        );
    }
}

export default SignIn;