import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import "./UserHome.css"
import { Link, useNavigate } from 'react-router-dom';
import UserSession from '../UserSession/UserSession';



function UserHome() {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate('/user/reviews');
  };

  const handleProfileClick = () => {
    navigate('/user/profile');
  };



  return (
    <>
      <NavBar />
      <Container className="mt-5 contenedor">
        <div className="border p-4 text-center">
          <h2>Tu perfil</h2>
        </div>
        <div className="mt-4 text-center">
          <Row className="justify-content-center contenedorbotones">
            <Col xs={12} md={6}>
              <Button 
                variant="primary" 
                size="lg" 
                className="mr-md-3 mb-3 boton"
                onClick={handleReviewClick}
              >
                Mis Reseñas
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                className="mr-md-3 mb-3 boton"
                onClick={handleProfileClick}
              >
                Datos Personales
              </Button>

              <Link to={"/user/session"}>
              <Button 
                variant="primary" 
                size="lg" 
                className="mb-3 boton"
              >
                Cerrar Sesión
              </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default UserHome;
