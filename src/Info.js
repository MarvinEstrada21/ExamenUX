import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Info extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Information</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                Web Page Admin and Seller: Marvin Estrada <br/>
                Fax: +504 22711326 <br/>
                Email: marvinestrada@unitec.edu <br/>
                If you want to send additional information about your recently bought product or <br/>
                want to know more about any product feel free to contact the administrator via email
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Info;