import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./LoginCard.css"
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log(data);
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("role", data.user.role);
        navigate("/");
        window.location.reload(); // Recarga la página después de iniciar sesión
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar/> {/* Asegúrate de incluir el NavBar */}
      <Container className="mt-5 altura">
        <Card className='login'>
          <Card.Body>
            <Card.Title className="text-center mb-4">Logéate</Card.Title>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </Form.Group>

              <Button variant="primary" type="login" onClick={handleLogin}>
                LogIn
              </Button>
            </Form>
            <Link to={"/signup"}>
              <p>Quiero crearme una cuenta</p>
            </Link>
          </Card.Body>
        </Card>
      </Container>
      <Footer/> {/* Asegúrate de incluir el Footer */}
    </>
  );
}

export default LoginCard;