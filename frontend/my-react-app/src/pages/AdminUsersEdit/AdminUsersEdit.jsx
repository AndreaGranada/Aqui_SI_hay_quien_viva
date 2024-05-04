import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { getApartmentById, updateApartment } from '../../services/apartment.service';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin';
import { getUserById, updateUser } from '../../services/users.service';

function AdminUsersEdit() {
    const { idUserEdit } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const token = localStorage.getItem('token');
                const userData = await getUserById(idUserEdit, token);
                setFormData(userData);
                setLoading(false);
                console.log(userData); // Mueve esta línea dentro del bloque try
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchApartment();
    }, [idUserEdit]);
    //console.log(formData)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await updateUser(idUserEdit, token, formData);
            // Muestra la alerta
            setShowAlert(true);
        } catch (error) {
            console.error('Error updating user:', error);
            // Muestra la alerta de error y establece el mensaje de error
            setShowAlert(true);
            setErrorMessage("No se ha podido actualizar: " + error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    

    return (
        <div className="container-fluid row">
            <MenuAdmin />
            <main className="name col ms-5 mt-5 mb-5">

                <div className="row w-50 mt-5 mb-5 pt-5 pb-5 pe-5 ps-5 bg-light mx-auto">
                    <h2 className='text-center mb-4'>Editar información de la vivienda</h2>
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-2 text-justify">
                            <label className='form-label text-justify'>
                                Id:
                                <input type="text" name="id" value={formData.id || ''} onChange={handleChange} className='form-control bg-light' readOnly />
                            </label>

                        </div>
                        <div className="col-5">
                            <label className='form-label w-100'>
                                Nombre:
                                <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-5">
                            <label className='form-label w-100'>
                                Apellido:
                                <input type="text" name="surname" value={formData.surname || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                DNI:
                                <input type="text" name="dni" value={formData.dni || ''} onChange={handleChange} className='form-control' />
                            </label>

                        </div>
                        <div className="col-6">
                            <label className='form-label w-100'>
                                Correo electronico:
                                <input type="text" name="email" value={formData.email || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                Telefono:
                                <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                Rol:
                                <input type="text" name="role" value={formData.role || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>


                        {showAlert && (
                            <div className={errorMessage ? "alert alert-danger" : "alert alert-success"} role="alert">
                                {errorMessage ? errorMessage : "¡La información ha sido editada exitosamente!"}
                            </div>
                        )}

                        <div className="col-12 text-center">
                            <button type="submit" className='btn btn-secondary w-50 text-center mx-0 mt-3'>Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AdminUsersEdit;