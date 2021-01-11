import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/storytelling.svg';
import cart from '../../assets/shopping-cart.svg';
import { useCartContext } from "../../context/CartContext";
import './NavBar.css'

export default function NavBar() {
    const { count } = useCartContext();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                     <img className="imgLogo" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="NavCustom" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="NavLink">
                            <NavLink className="NavLink" exact to="/" activeClassName="selected">
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink exact to="/Catalogo" activeClassName="selected">
                                Catalogo
                            </NavLink>
                        </Nav.Link>
                        <NavDropdown title="Categorias disponibles" id="basic-nav-dropdown">
                           
                            <Link exact to="/Categories/Cuento" >
                                <div>
                                    Cuento
                                </div>
                            </Link>
                            <Link exact to="/Categories/Novela">
                                <div>
                                    Novela
                                </div>
                            </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Ficción</NavDropdown.Item>
                                <NavDropdown.Item>Policial</NavDropdown.Item>
                                <NavDropdown.Item>Terror</NavDropdown.Item>
                                <NavDropdown.Item>Romantica</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                    <NavLink to='/Cart'>
                    <Button variant="light">
                        <img className="shoppingClass" src={cart} alt="shopping-cart" />
                        <Badge variant="secondary">{count }</Badge>
                        </Button>
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
