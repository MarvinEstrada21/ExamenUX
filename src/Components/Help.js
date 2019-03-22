import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button" color ="danger">
          HELP
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Purchasing Information</PopoverHeader>
          <PopoverBody>
              To purchase a couch, click on the "Buy" button of the couch you want. 
              It will display a popup window. Complete the form with the required information, 
              then click "Complete Purchase" to set and pay for your couch. Enjoy your visit!
            </PopoverBody>
        </Popover>
      </div>
    );
  }
}