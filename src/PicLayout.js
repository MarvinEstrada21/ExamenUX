import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Couch1 from './Couch1.jpg';
import Couch2 from './Couch2.jpg';
import Couch3 from './Couch4.jpg';
import Couch4 from './Couch3.jpg';

class PicLayout extends Component {
    constructor() {
        super();
    }
    render () {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <center>
                            <img src={Couch1} style={{width:250,height:200}}/>
                        </center>
                    </Col>
                    <Col>
                        <center>
                            <img src={Couch2} style={{width:250,height:200}}/>
                        </center>
                    </Col>
                    <Col>
                        <center>
                            <img src={Couch3} style={{width:250,height:200}}/>
                        </center>
                    </Col>
                    <Col>
                        <center>
                            <img src={Couch4} style={{width:250,height:200}}/>
                        </center>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PicLayout;