import React, { useEffect, useState } from "react";
import { getOwnProfile, UpdateOwnProfile } from "../../services/user.service";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Form, Button} from "react-bootstrap";
import "./UserProfile.css"



const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");

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

  useEffect(() => {
    if (profileData) {
      setName(profileData.name);
      setSurname(profileData.surname);
      setEmail(profileData.email);
      setDni(profileData.dni);
      setPhone(profileData.phone);
    }
  }, [profileData]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDni = (e) => {
    setDni(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token)
      await UpdateOwnProfile(name, surname, email, dni, phone, token);
      alert("Datos actualizados correctamente");
      console.log(token); // Actualiza los datos del perfil después de la actualización
    } catch (error) {
      console.log("Error al actualizar el perfil: ", error.message);
      // Manejar errores aquí
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
                <Form.Control type="text" value={name} onChange={handleName} />
              </Form.Group>
              <Form.Group controlId="formSurname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" value={surname} onChange={handleSurname} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" value={email} onChange={handleEmail} />
              </Form.Group>
              <Form.Group controlId="formDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control type="text" value={dni} onChange={handleDni} />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" value={phone} onChange={handlePhone} />
              </Form.Group>
            </Form>
          )}
        </div>
      </div>
      <button variant="primary" onClick={handleUpdate}>
        Guardar Cambios editados
      </button>

      <Footer />
    </>
  );
};

export default UserProfile;
