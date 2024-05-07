import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "./AdminSession.css"
import imagen_logo from '../../assets/img/logo_marron.png';
import { Link } from "react-router-dom";


const AdminSession = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); // Instanciar el hook navigate

    console.log(data);

    const handleLogout = () => {
        // Limpiar el token de autenticación del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('name')
        localStorage.removeItem('role')
        
        // Redirigir al usuario al inicio
        navigate("/"); // Redirigir al usuario a la página de inicio
        window.location.reload(); // Recarga la página después de cerrar sesión
    };

    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin />

                <main className="name col ms-5 mt-5 mb-5">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="cerrar-sesion text-center">
                            <img src={imagen_logo} alt="" />
                            <h2 className="mb-3">¡Hola admin!</h2>
                            <h3 className="mb-4">¿Quieres cerrar sesión?</h3>
                            <div className="botones">
                                <button type="button" className="btn btn-secondary me-2" onClick={handleLogout}>Cerrar sesión</button>
                                <Link to="/admin"><button type="button" className="btn btn-danger">Cancelar</button></Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AdminSession;