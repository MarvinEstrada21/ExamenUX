import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CouchCard from './CouchCard';
import Couch1 from './Couch1.jpg';
import Couch2 from './Couch2.jpg';
import Couch3 from './Couch4.jpg';
import Couch4 from './Couch3.jpg';

class PicLayout extends Component {
    constructor() {
        super();
        this.state = {
            couches: [
                {
                    image: Couch1,
                    name: "Couch#1",
                    color: "Black",
                    price: "Price: $500"
                },
                {
                    image: Couch2,
                    name: "Couch#2",
                    color: "Brown",
                    price: "Price: $700"
                },
                {
                    image: Couch3,
                    name: "Couch#2",
                    color: "Brown",
                    price: "Price: $700"
                },
                {
                    image: Couch4,
                    name: "Couch#2",
                    color: "Brown",
                    price: "Price: $700"
                }
            ]
        }
    }
    render () {
        let couchCard = this.state.couches.map(couch => {
            return (
                <Col>
                    <center>
                        <CouchCard couch={couch}/>
                    </center>
                </Col>
            )
        })
        return (
            <Container fluid>
                <Row>
                    {couchCard}
                </Row>
            </Container>
        )
    }
}

export default PicLayout;