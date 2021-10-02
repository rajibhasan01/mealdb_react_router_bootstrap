import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = {
        fontWeight: "bold"
    }
    return (
        <div className="">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <NavLink activeStyle={navStyle} className="text-decoration-none text-dark" to="/home">Home</NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <NavLink activeStyle={navStyle} className="text-decoration-none text-dark" to="/meals">Meals</NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <NavLink activeStyle={navStyle} className="text-decoration-none text-dark" to="/about">About</NavLink>
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;