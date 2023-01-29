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
                        <Link className="nav-link " to="/fetch-data">
                        fetch-data
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}

export default NavMenu;


//export class NavMenu extends Component {
//  static displayName = NavMenu.name;

//    constructor(props) {
//        super(props);

//        this.toggleNavbar = this.toggleNavbar.bind(this);
//        this.state = {
//            collapsed: true
//        };
//    }

//    toggleNavbar() {
//        this.setState({
//            collapsed: !this.state.collapsed
//        });
//    }

//  render() {
//    return (
//      <header>
//        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
//          <NavbarBrand tag={Link} to="/">Bookstore</NavbarBrand>
//          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
//            <ul className="navbar-nav flex-grow">
//              <NavItem>
//                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
//              </NavItem>
//              <NavItem>
//                <NavLink tag={Link} className="text-dark" to="/Bookstore">Bookstore</NavLink>
//              </NavItem>
//              <NavItem>
//                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
//              </NavItem>
//            </ul>
//          </Collapse>
//        </Navbar>
//      </header>
//    );
//  }
//}
