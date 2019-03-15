import React, { Component } from 'react';
import logo from './LogoCouchUp.jpg';
import { Container, Row, Col } from 'reactstrap';
import Carousel from './Carousel';
import Info from './Info';
import HomeNavBar from './HomeNavBar';
import Couch1 from './Pics/Couch1.jpg';
import Couch2 from './Pics/Couch2.jpg';
import Couch3 from './Pics/Couch3.jpg';
import Couch4 from './Pics/Couch4.jpg';
import Couch5 from './Pics/Couch5.jpg';
import Couch6 from './Pics/Couch6.jpg';
import Couch7 from './Pics/Couch7.jpg';
import Couch8 from './Pics/Couch8.jpg';
import Couch9 from './Pics/Couch9.jpg';
import Couch10 from './Pics/Couch10.jpg';
import Couch11 from './Pics/Couch11.jpg';
import Couch12 from './Pics/Couch12.jpg';
import Couch13 from './Pics/Couch13.jpg';
import Couch14 from './Pics/Couch14.jpg';
import Couch15 from './Pics/Couch15.jpg';
import Couch16 from './Pics/Couch16.jpg';
import Couch17 from './Pics/Couch17.jpg';
import Couch18 from './Pics/Couch18.jpg';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <center><img src={logo} style={{ width: 450, height: 150 }} /></center>
                <HomeNavBar/>
                <center>
                    <Row>
                        <Col><center><Carousel /></center></Col>
                    </Row>
                    <Row>
                        <Col><img src={Couch1} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch2} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch3} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch4} style={{ width: 300, height: 200 }} /></Col>
                    </Row>
                    <Row>
                        <Col><img src={Couch5} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch6} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch7} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch8} style={{ width: 300, height: 200 }} /></Col>
                    </Row>
                    <Row>
                        <Col><img src={Couch9} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch10} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch11} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch12} style={{ width: 300, height: 200 }} /></Col>
                    </Row>
                    <Row>
                        <Col><img src={Couch13} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch14} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch15} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch16} style={{ width: 300, height: 200 }} /></Col>
                    </Row>
                    <Row>
                        <Col><img src={Couch17} style={{ width: 300, height: 200 }} /></Col>
                        <Col><img src={Couch18} style={{ width: 300, height: 200 }} /></Col>
                    </Row>
                </center>
                <center><Info /></center>
            </div>
        );
    }
}

export default Home;
