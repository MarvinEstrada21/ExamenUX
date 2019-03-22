import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

export default class HomeNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">CouchUp Online Store</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/SignIn">SignIn |</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/SignUp">| SignUp</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}