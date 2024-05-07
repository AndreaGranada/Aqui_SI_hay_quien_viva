import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import "./UserHome.css"
import { Link, useNavigate } from 'react-router-dom';
import UserSession from '../UserSession/UserSession';
import { useState, useEffect } from 'react';
import { getOwnProfile } from '../../services/user.service';
import imagenJuan from "../../assets/img/JuanCuesta.png"


function UserHome() {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      obtenerPerfil(token);
    } else {
      console.log("No hay token almacenado en localStorage");
    }
  }, []);

  const obtenerPerfil = async (token) => {
    try {
      const data = await getOwnProfile(token);
      setProfileData(data);
    } catch (error) {
      console.log("Error al obtener el perfil: ", error.message);
    }
  };

  console.log(profileData)

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
        <div className="mi-perfil">


          <div className="titulo-perfil w-100  mt-5 mb-2 p-4 text-center">
            <h2>Tu perfil</h2>
          </div>
          <div className="info-perfil row">
            <div className="col-md-4">
              <img width="100%" src={imagenJuan} alt="" />
            </div>
            <div className="col-md-8">
              {profileData && (
                <h2 className='mt-5'>{profileData.name} {profileData.surname}</h2>
              )}
              {profileData && (
                <h4 className='mt-5'>DNI: {profileData.dni}</h4>
              )}
              {profileData && (
                <h4 className=''>Email: {profileData.email}</h4>
              )}
              {profileData && (
                <h4 className=''>Teléfono: {profileData.phone}</h4>
              )}

              <div className="botones row mt-5">
                <div className='col-xs-12 col-md-4'>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mr-md-3 mb-3 boton"
                    onClick={handleReviewClick}
                  >
                    Mis Reseñas
                  </Button>
                </div>
                <div className='col-xs-12 col-md-4'>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mr-md-3 mb-3 boton"
                    onClick={handleProfileClick}
                  >
                    Datos Personales
                  </Button>
                </div>
                <div className='col-xs-12 col-md-4'>
                  <Link to={"/user/session"}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="mb-3 boton"
                    >
                      Cerrar Sesión
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default UserHome;
