import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button color="success" onClick={this.toggle}>Buy{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Customer Details</ModalHeader>
          <ModalBody>
            {/*<Label for="exampleText">Name</Label>*/}
            <Input type="text" name="text" id="exampleText" placeholder="Name" /> <br/>
            <Input type="text" name="text" id="exampleText" placeholder="Address" /> <br/>
            <Input type="text" name="text" id="exampleText" placeholder="Delivery Date: mm/dd/yyyy" /> <br/>
            <Input type="text" name="text" id="exampleText" placeholder="Credit/Debit Card Number" /> <br/>
            <Input type="text" name="text" id="exampleText" placeholder="Cardholder Name" /> <br/>
            <Input type="text" name="text" id="exampleText" placeholder="Card Expiration Date: mm/yyyy" /> <br/>
            <Input type="text" name="text" id="exampleText" placeholder="Security Code" /> <br/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Complete Purchase</Button>{''}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;