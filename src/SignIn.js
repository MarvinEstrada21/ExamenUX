import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from './LogoCouchUp.jpg';

class SignIn extends Component {
    render() {
        return(
            <div>
                <Container>
                    <center><img src={logo} style={{ width: 450, height: 150 }}/></center>
                </Container>
            </div>
        );
    }
}

export default SignIn;