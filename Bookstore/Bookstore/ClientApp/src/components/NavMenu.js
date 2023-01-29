import React from 'react';
/*import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';*/
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavMenu() {


    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand className="navbarText">Bookstore</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link " to="/">
                             Home
                        </Link>
                        <Link className="nav-link " to="/Bookstore">
                        Bookstore
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}

export default NavMenu;

