import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth.service';

import "./SignUp.css"

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [dni, setDni] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleDni = (e) => {
    setDni(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (name && surname && email && password && repeatPassword && dni && phone) {
      if (password === repeatPassword) {
        try {
          const data = await signup(name, surname, email, password, dni, phone);
          console.log(data)
          if (data) {
            navigate('/signup/confirmation');
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setPasswordMismatch(true);
      }
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <>
    <NavBar/>
    <Container className="mt-5">
      <Row className="justify-content-center mt-5 mb-5">
        <Col md={6} className="mt-5 mb-5">
          <Card className='registro'>
            <Card.Body>
              <Card.Title className="text-center mb-4">Regístrate</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={handleName}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={surname}
                    onChange={handleSurname}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={handleEmail}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    value={password}
                    onChange={handlePassword}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Mostrar contraseña"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Repetir Contraseña</Form.Label>
                  <Form.Control
                    type={showRepeatPassword ? "text" : "password"}
                    placeholder=""
                    value={repeatPassword}
                    onChange={handleRepeatPassword}
                    style={{ borderColor: passwordMismatch ? 'red' : '' }}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Mostrar contraseña"
                    onChange={() => setShowRepeatPassword(!showRepeatPassword)}
                  />
                  {passwordMismatch && <p className="text-danger">Las contraseñas no coinciden</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={dni}
                    onChange={handleDni}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder=""
                    value={phone}
                    onChange={handlePhone}
                  />
                </Form.Group>
               
                <Button
                className="btn-crear"
                  variant="primary"
                  type="submit"
                  onClick={handleSignup}
                >
                  Registrarse
                </Button>
              </Form>
              <Link to="/login">
                <p><u>Ya tengo una cuenta</u></p>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default SignUp;
