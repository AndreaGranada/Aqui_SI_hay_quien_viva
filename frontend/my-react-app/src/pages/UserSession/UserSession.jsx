import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "./UserSession.css";
import imagen_logo from "../../assets/img/logo_marron.png";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


const UserSession = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload(); // Recarga la página después de cerrar sesión
  };

  return (
    <>
      <div>
        <NavBar />
        <main className="name col ms-5 mt-5 mb-5">
          <div className="sesion-user d-flex justify-content-center align-items-center">
            <div className="cerrar-sesion text-center">
              <img src={imagen_logo} alt="" />
              <h2 className="mb-3 mt-5">¡Hola {userName || "usuario"}!</h2>
              <h3 className="mb-4">¿Quieres cerrar sesión?</h3>
              <div className="botones">
                <button
                  type="button"
                  className="btn btn-danger me-2"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
                <Link to="/user">
                  <button type="button" className="btn btn-secondary">
                    Cancelar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UserSession;