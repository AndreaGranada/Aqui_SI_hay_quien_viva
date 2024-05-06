import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin';
import { getOneLegalDoc } from '../../services/legaldocs.service';
import { updateLegalDoc } from '../../services/legaldocs.service';
function AdminLegalDocsEdit() {
    const { idLegalDocsEdit } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const token = localStorage.getItem('token');
                const legalDocData = await getOneLegalDoc(idLegalDocsEdit, token);
                setFormData(legalDocData);
                setLoading(false);
                console.log(legalDocData); // Mueve esta línea dentro del bloque try
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchReview();
    }, [idLegalDocsEdit]);
    //console.log(formData)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await updateLegalDoc(idLegalDocsEdit, token, formData);
            // Muestra la alerta
            setShowAlert(true);
        } catch (error) {
            console.error('Error updating review:', error);
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

                <div className="row  mt-5 mb-5 pt-5 pb-5 pe-5 ps-5 bg-light mx-auto">
                    <h2 className='text-center mb-4 col-12'>Editar información de la reseña</h2>

                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-3">
                            <img className="mx-0" src={formData.document} width="300px" alt="" />
                        </div>

                        <div className="col-1 text-justify">
                            <label className='form-label text-justify align-middle'>
                                Id:
                                <input type="text" name="id" value={formData.id || ''} onChange={handleChange} className='form-control bg-light' readOnly />
                            </label>

                        </div>
                        <div className="col-4">
                            <label className='form-label w-100'>
                                Estado
                                <input type="text" name="status" value={formData.status || ''} onChange={handleChange} className='form-control' />
                            </label>

                        </div>
                        <div className="col-4">
                            <label className='form-label w-100'>
                                Documento:
                                <input type="text" name="document" value={formData.document || ''} onChange={handleChange} className='form-control' readOnly disabled />
                            </label>
                        </div>

                        {showAlert && (
                            <div className={errorMessage ? "alert alert-danger" : "alert alert-success"} role="alert">
                                {errorMessage ? errorMessage : "¡La información ha sido editada exitosamente!"}
                            </div>
                        )}

                        <div className="col-12 text-center">
                            <button type="submit" className='btn btn-secondary text-center mx-0 mt-3'>Guardar cambios</button>
                        </div>
                    </form>
                </div>


            </main>
        </div>
    );
}

export default AdminLegalDocsEdit;