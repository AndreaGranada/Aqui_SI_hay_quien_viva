import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApartmentById, updateApartment } from '../../services/apartment.service';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin';

function AdminApartmentEdit() {
    const { idApartmentEdit } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const token = localStorage.getItem('token');
                const apartmentData = await getApartmentById(idApartmentEdit, token);
                setFormData(apartmentData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching apartment:', error);
            }
        };
        fetchApartment();
    }, [idApartmentEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await updateApartment(idApartmentEdit, token, formData);
            // Muestra la alerta
            setShowAlert(true);
        } catch (error) {
            console.error('Error updating apartment:', error);
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
                    <h2 className='text-center mb-3'>Edit Apartment</h2>
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-2 text-justify">
                            <label className='form-label text-justify'>
                                Id:
                                <input type="text" name="id" value={formData.id || ''} onChange={handleChange} className='form-control' />
                            </label>

                        </div>
                        <div className="col-5">
                            <label className='form-label w-100'>
                                Tipo de vía:
                                <input type="text" name="road" value={formData.road || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-5">
                            <label className='form-label w-100'>
                                Nombre de la vía:
                                <input type="text" name="roadName" value={formData.roadName || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                Código Postal:
                                <input type="text" name="postalCode" value={formData.postalCode || ''} onChange={handleChange} className='form-control' />
                            </label>

                        </div>
                        <div className="col-8">
                            <label className='form-label w-100'>
                                Detalles de la vivienda:
                                <input type="text" name="extraInfo" value={formData.extraInfo || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                Districto Id:
                                <input type="text" name="districtId" value={formData.districtId || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>


                        {/* Alerta para mostrar la confirmación */}
                        {showAlert && (
                            <div className="alert alert-success" role="alert">
                                ¡La información ha sido editada exitosamente!
                            </div>
                        )}
                        <div className="col-12 text-center">
                            <button type="submit" className='btn btn-secondary w-50 text-center mx-0 mt-3'>Save</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AdminApartmentEdit;