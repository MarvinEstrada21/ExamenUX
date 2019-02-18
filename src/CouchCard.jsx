import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ButtonTest from './ButtonTest';

class CouchCard extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Card>
                    <CardImg src={this.props.couch.image}/>
                    <CardBody>
                    <CardTitle>{this.props.couch.name}</CardTitle>
                    <CardSubtitle>{this.props.couch.color}</CardSubtitle>
                    <CardText>{this.props.couch.price}</CardText>
                    <ButtonTest/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CouchCard;