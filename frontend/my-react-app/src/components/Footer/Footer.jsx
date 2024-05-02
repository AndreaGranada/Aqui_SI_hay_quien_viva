import React from 'react'
//import { Link } from 'react-router-dom'
import './Footer.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { CardFooter, Image } from 'react-bootstrap';
import imagen_logo from '../../assets/img/logo_amarillo.png';

function Footer() {
  return (
    <CardFooter expand="lg" className="bg-naranja fs-5 footer-bottom">
      <Container>
       <div className="row justify-content-between align-items-center" >
        <div className="col-3">
        <Image className='navbar_logo' src={imagen_logo} />
        </div>
        <div className="col-9 footer-text">
        <h4>Proyecto Reboot Academy - Violeta y Andrea</h4>
        </div>
       </div>
          
        
      </Container>
    </CardFooter>
  );
}

export default Footer;