import React from 'react';

import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import Logo2 from '../../Assets/images/logo2.png';

import './navBarHeader.css';

export const NavBarHeader = () => {
  return (
    <div className='divPrincipal'>
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img src={Logo2} alt='logo' className='imagemLogo'/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Funções</Nav.Link>
                    <Nav.Link href="#link" className='brl'>BRL</Nav.Link>
                    <Nav.Link href="#link" className='carteira'>ENTRE COM SUA CARTEIRA</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    </div>
  )
}
export default NavBarHeader;