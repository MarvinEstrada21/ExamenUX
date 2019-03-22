import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Spinner } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <InputGroup>
                <Input placeholder="Insert a color" />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" >🔍 Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default Example;