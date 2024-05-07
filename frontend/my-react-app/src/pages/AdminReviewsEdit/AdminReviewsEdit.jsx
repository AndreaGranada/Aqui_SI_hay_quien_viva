import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin';
import { getOneReview } from '../../services/apartmentsReviews.service';
import { updateReview } from '../../services/apartmentsReviews.service';
function AdminReviewsEdit() {
    const { idReviewEdit } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const token = localStorage.getItem('token');
                const reviewData = await getOneReview (idReviewEdit, token);
                setFormData(reviewData);
                setLoading(false);
                console.log(reviewData); // Mueve esta línea dentro del bloque try
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchReview();
    }, [idReviewEdit]);
    //console.log(formData)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await updateReview(idReviewEdit, token, formData);
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
                    <h2 className='text-center mb-4'>Editar información de la reseña</h2>
                    <div className="col-3 text-center">
                        <img className="mx-0" src={formData.media} width="300px" alt="" />
                    </div>
                    <div className="col-9">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-2 text-justify">
                          <label className='form-label text-justify'>
                                Id:
                                <input type="text" name="id" value={formData.id || ''} onChange={handleChange} className='form-control bg-light' readOnly />
                            </label> 

                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                Fecha de publicacion:
                                <input type="text" name="dni" value={formData.datePost || ''} onChange={handleChange} readOnly disabled className='form-control' />
                            </label>

                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                ¿Está publidado?:
                                <input type="text" name="postedStatus" value={formData.postedStatus || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                ID Documento Legal:
                                <input type="text" name="legalDocId" value={formData.legalDocId || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        
                        <div className="col-2">
                            <label className='form-label w-100'>
                                ID Apartamento:
                                <input type="text" name="apartmentId" value={formData.apartmentId || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-2">
                            <label className='form-label w-100'>
                                ID Usuario:
                                <input type="text" name="userId" value={formData.userId || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>


                        <div className="col-6 text-justify">
                            <label className='form-label text-justify w-100'>
                                Media:
                                <input type="text" name="media" value={formData.media || ''} onChange={handleChange} className='form-control bg-light' readOnly disabled />
                            </label>

                        </div>
                        <div className="col-6">
                            <label className='form-label w-100'>
                                Titulo:
                                <input type="text" name="title" value={formData.title || ''} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className="col-12">
                            <label className='form-label w-100'>
                                Contenido:
                                <textarea type="textarea" name="content" value={formData.content || ''} onChange={handleChange} className='form-control' />
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
                  
                </div>
            </main>
        </div>
    );
}

export default AdminReviewsEdit;