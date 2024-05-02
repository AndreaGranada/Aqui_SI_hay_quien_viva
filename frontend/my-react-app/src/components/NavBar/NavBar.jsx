import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
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
              <Nav.Link><Link to="/" className="nav-link" style={{ textDecoration: 'none', color: '#403529' }}>Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="nav-link" style={{ textDecoration: 'none', color: '#403529' }}>Sobre Nosotros</Link></Nav.Link>
              <NavDropdown title="Mi perfil" className="nav-link" id="basic-nav-dropdown" style={{ textDecoration: 'none', color: '#403529' }}>
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/signup">Registrate</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/login">Inicia Sesión</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  {localStorage.getItem("role") === "admin" ? (
                    <Link to="/admin">Panel de administrador</Link>
                  ) : (
                    <Link to="/user">Mi perfil</Link>
                  )}
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