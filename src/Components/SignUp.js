import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from '../LogoCouchUp.jpg';
import HomeNavBar from './HomeNavBar';

class SignUp extends Component {
    render() {
        return(
            <div>
                <Container>
                    <center><img src={logo} style={{ width: 450, height: 150 }}/></center>
                    <HomeNavBar/>
                </Container>
            </div>
        );
    }
}

export default SignUp;