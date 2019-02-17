import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CouchCard from './CouchCard';
import Couch1 from './Couch1.jpg';
import Couch2 from './Couch2.jpg';
import Couch3 from './Couch3.jpg';
import Couch4 from './Couch4.jpg';
import Couch5 from './Couch5.jpg';
import Couch6 from './Couch6.jpg';
import Couch7 from './Couch7.jpg';
import Couch8 from './Couch8.jpg';
import Couch9 from './Couch9.jpg';
import Couch10 from './Couch10.jpg';
import Couch11 from './Couch11.jpg';
import Couch12 from './Couch12.jpg';

class PicLayout extends Component {
    constructor() {
        super();
        this.state = {
            couches1: [
                {
                    image: Couch1,
                    name: "Couch#1",
                    color: "Grey",
                    price: "Price: $550"
                },
                {
                    image: Couch2,
                    name: "Couch#2",
                    color: "Grey",
                    price: "Price: $550"
                },
                {
                    image: Couch3,
                    name: "Couch#3",
                    color: "Grey",
                    price: "Price: $550"
                },
                {
                    image: Couch4,
                    name: "Couch#4",
                    color: "Grey",
                    price: "Price: $550"
                }
            ],
            couches2: [
                {
                    image: Couch5,
                    name: "Couch#5",
                    color: "Black Leather",
                    price: "Price: $550"
                },
                {
                    image: Couch6,
                    name: "Couch#6",
                    color: "Grey",
                    price: "Price: $550"
                },
                {
                    image: Couch7,
                    name: "Couch#7",
                    color: "Light Grey",
                    price: "Price: $550"
                },
                {
                    image: Couch8,
                    name: "Couch#8",
                    color: "Space Grey",
                    price: "Price: $550"
                }
            ],
            couches3: [
                {
                    image: Couch9,
                    name: "Couch#9",
                    color: "Black",
                    price: "Price: $150"
                },
                {
                    image: Couch10,
                    name: "Couch#10",
                    color: "Green",
                    price: "Price: $250"
                },
                {
                    image: Couch11,
                    name: "Couch#11",
                    color: "Red",
                    price: "Price: $350"
                },
                {
                    image: Couch12,
                    name: "Couch#12",
                    color: "Blue",
                    price: "Price: $300"
                }
            ]
        }
    }
    render () {
        let couchCard1 = this.state.couches1.map(couch1 => {
            return (
                <Col>
                    <center>
                        <CouchCard couch={couch1}/>
                    </center>
                </Col>
            )
        })
        let couchCard2 = this.state.couches2.map(couch2 => {
            return (
                <Col>
                    <center>
                        <CouchCard couch={couch2}/>
                    </center>
                </Col>
            )
        })
        let couchCard3 = this.state.couches3.map(couch3 => {
            return (
                <Col>
                    <center>
                        <CouchCard couch={couch3}/>
                    </center>
                </Col>
            )
        })
        return (
            <Container fluid>
                <Row>
                    {couchCard1}
                </Row>
                <Row>
                    {couchCard2}
                </Row>
                <Row>
                    {couchCard3}
                </Row>
            </Container>
        )
    }
}

export default PicLayout;