import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import imagen_logo from "../../assets/img/logo_amarillo.png";


function NavBar() {
  const [roleUser, setRoleUser] = useState("");

  useEffect(() => {
    const handleRoleChange = () => {
      const role = localStorage.getItem("role");
      setRoleUser(role);
    };

    handleRoleChange();

    window.addEventListener("storage", handleRoleChange);

    return () => {
      window.removeEventListener("storage", handleRoleChange);
    };
  }, []);

  // Verificar si hay un token en el local storage
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Navbar expand="lg" className="bg-naranja fs-5">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-2">
          <Image className="navbar_logo" src={imagen_logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="justify-content-end">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/"
                  className="nav-link"
                  style={{ textDecoration: "none", color: "#F2E963" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/about"
                  className="nav-link"
                  style={{ textDecoration: "none", color: "#F2E963" }}
                >
                  Sobre Nosotros
                </Link>
              </Nav.Link>
              {isLoggedIn ? ( // Verificar si el usuario está loggeado
                <NavDropdown
                  title="Mi perfil"
                  className="nav-link"
                  id="basic-nav-dropdown"
                  style={{ textDecoration: "none", color: "#403529" }}
                >
                  <NavDropdown.Item>
                    {roleUser === "admin" ? (
                      <Link to="/admin">Panel de administrador</Link>
                    ) : roleUser === "user" ? (
                      <Link to="/user">Mi perfil</Link>
                    ) : null}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="Mi perfil"
                  className="nav-link"
                  id="basic-nav-dropdown"
                  style={{ textDecoration: "none", color: "#403529" }}
                  
                >
                  <NavDropdown.Item>
                    <Link to="/signup">Registrate</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/login">Inicia Sesión</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;