import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <InputGroup>
                <Input placeholder="Insert a color" />
                <InputGroupAddon addonType="append">
                    <Button color="secondary">Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default Example;