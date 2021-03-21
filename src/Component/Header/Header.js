import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../Home/Home';

const Header = () => {
    const linkStyle = {
        color: 'white'
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link style={linkStyle} to="/home">Sure Way</Link></Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link><Link style={linkStyle} to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link style={linkStyle} to="/destination/1">Destination</Link></Nav.Link>
            <Nav.Link>
                {
                    loggedInUser.email ? <span>{loggedInUser.displayName}</span> : <Link style={linkStyle} to="/login">Login</Link>
                }
            </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;