import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';
import { useState } from 'react';


function LogIn() {

  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {

      const data = await login(email, password);
      console.log(data)
      if(data){
      localStorage.setItem('token', data.token)
      navigate('/')

    }
      
    } catch (error) {
      console.log(error)
      
    }
  }

  return (

    <Container>
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
 

      <Button 
      variant="primary" 
      type="login"
      onClick={handleLogin}
      >
        LogIn
      </Button>

    </Form>
    <Link to={'/signup'}>
    <p>Quiero crearme una cuenta</p>

    </Link>
    </Container>
  );
}

export default LogIn;