import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

import imagen_logo from '../../assets/img/logo_amarillo.png';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-naranja fs-5">
      <Container>
        <Navbar.Brand href="#home" className='fs-2'>
          <Image className='navbar_logo' src={imagen_logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="justify-content-end">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/" style={{ textDecoration: 'none', color: '#403529' }}>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/about" style={{ textDecoration: 'none', color: '#403529' }}>Sobre Nosotros</Link></Nav.Link>
            <NavDropdown title="Mi perfil" id="basic-nav-dropdown" style={{ textDecoration: 'none', color: '#403529' }}>
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registrate
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Inicia Sesión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Configuración
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      
      </Container>
    </Navbar>
  );
}

export default NavBar;