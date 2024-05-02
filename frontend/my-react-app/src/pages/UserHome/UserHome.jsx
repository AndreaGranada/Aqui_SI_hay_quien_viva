import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import "./UserHome.css"
import { useNavigate } from 'react-router-dom';



function UserHome() {
  const navigate = useNavigate();

  const handleReviewClick = () => {

    navigate('/user/reviews');
  };

  const handleLegalDocsClick = () => {

    navigate('/user/legaldocs');
  };

  const handleProfileClick = () => {

    navigate('/user/profile');
  };



  return (
    <>
      <NavBar />
      <Container className="mt-5 contenedor" >
        <div className="border p-4 text-center">
          <h2>Tus Datos de Perfil</h2>
        </div>
        <div className="mt-4 text-center">
          <Row className="justify-content-center contenedorbotones">
            <Col xs={12} md={6}>
              <Button 
              variant="primary" 
              size="lg" 
              className="mr-md-2 mb-3 mb-md-0 boton"
              onClick={handleReviewClick}
              >
                Mis Reseñas
              </Button>
              <Button 
              variant="primary" 
              size="lg" 
              className="mb-3 mb-md-0 boton"
              onClick={handleLegalDocsClick}
              >
                Mis LegalDocs
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Button 
              variant="primary" 
              size="lg" 
              className="mb-3 boton"
              onClick={handleProfileClick}
              >
                Datos Personales
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default UserHome;
