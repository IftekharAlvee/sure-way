import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Sure Way</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Destination</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;