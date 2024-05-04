import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDistrictById, updateDistrict } from '../../services/district.service';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin';

function AdminDistrictEdit() {
    const { idDistrictEdit } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const token = localStorage.getItem('token');
                const districtData = await getDistrictById(idDistrictEdit, token);
                setFormData(districtData);
                setLoading(false);

                console.log(districtData)
            } catch (error) {
                console.error('Error fetching district:', error);
            }
        };
        fetchDistricts();
    }, [idDistrictEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await updateDistrict(idDistrictEdit, token, formData);
            // Muestra la alerta
            setShowAlert(true);
        } catch (error) {
            console.error('Error updating district:', error);
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
                    <h2 className='text-center mb-4'>Editar información del districto</h2>
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-2 text-justify">
                            <label className='form-label text-justify'>
                                Id:
                                <input type="text" name="id" value={formData.id || ''} onChange={handleChange} className='form-control bg-light' readOnly />
                            </label>

                        </div>
                        <div className="col-10">
                            <label className='form-label w-100'>
                                Nombre:
                                <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className='form-control' />
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

export default AdminDistrictEdit;