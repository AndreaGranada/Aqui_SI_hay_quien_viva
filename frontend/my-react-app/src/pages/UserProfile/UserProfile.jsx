import React, { useEffect, useState } from "react";
import { getOwnProfile } from "../../services/user.service";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Form } from "react-bootstrap";
import "./UserProfile.css"

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);

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

  return (
    <>
      <NavBar />

      <div className="container">
        <div>
        {profileData && (
          <Form>
            <h1 className="text-center">Tus Datos personales</h1>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" value={profileData.name} readOnly />
            </Form.Group>
            <Form.Group controlId="formSurname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" value={profileData.surname} readOnly />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" value={profileData.email} readOnly />
            </Form.Group>
            <Form.Group controlId="formDNI">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="text" value={profileData.dni} readOnly />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" value={profileData.phone} readOnly />
            </Form.Group>
          </Form>
        )}
        </div>
      </div>
      <button>Guardar Cambios editados</button>

      <Footer />
    </>
  );
};

export default UserProfile;
