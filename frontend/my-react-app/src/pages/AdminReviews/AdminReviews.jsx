import imagen_logo from '../../assets/img/logo_amarillo.png';
import { Link } from 'react-router-dom';
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { getAllReviews, deleteReviews } from '../../services/apartmentsReviews.service';
import { useState, useEffect } from 'react';

function AdminReviews() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchAllReviews = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token)
                const data = await getAllReviews(token);
                setData(data);
            } catch (error) {
                console.error('Error al obtener las reviews:', error);
            }
        };
        fetchAllReviews();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await deleteReviews(token, id);
            // Remove the deleted user from the data state
            setData(data.filter(users => users.id !== id));
        } catch (error) {
            console.error('Error deleting apartment:', error);
        }
    };

    //console.log(data)
    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin></MenuAdmin>
                <main className="name col ms-5 mt-5 mb-5">
                    <h2 className='mt-5 mb-5'>Reseñas registradas</h2>
                    <table className='table table-striped table-hover mb-5 table-responsive'>
                        <thead>
                            <tr className='table-dark'>
                                <th className="align-middle text-center col-1">ID</th>
                                <th className="align-middle text-center col-1">Imagen</th>
                                <th className="align-middle text-center col-1">Título</th>
                                <th className="align-middle text-center col-6">Contenido</th>
                                <th className="align-middle text-center col-1">Fecha</th>
                                <th className="align-middle text-center col">Documento legal</th>
                                <th className="align-middle text-center col">Apartment ID</th>
                                <th className="align-middle text-center col">User ID</th>
                                <th className="align-middle text-center col-1">Estado</th>
                                <th className="align-middle text-center col-1"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center">{item.id}</td>
                                    <td className="align-middle text-center"><a href={item.media}><img width="100px" height="100px"src={item.media} alt="" /></a></td>
                                    <td className="align-middle text-center">{item.title}</td>
                                    <td className="align-middle text-center">{item.content}</td>
                                    <td className="align-middle text-center">{item.datePost}</td>
                                    <td className="align-middle text-center">{item.legalDocId}</td>
                                    <td className="align-middle text-center">{item.apartmentId}</td>
                                    <td className="align-middle text-center">{item.userId}</td>
                                    <td className={item.postedStatus === 'no' ? 'table-danger align-middle text-center' : 'align-middle text-center table-success'}>{item.postedStatus}</td>
                                    <td className="text-center align-middle">
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                            <button className="btn-secondary btn me-3 align-middle">Editar</button>
                                            <button className="btn-danger btn me-3 align-middle" onClick={() => handleDelete(item.id)}>Borrar</button>
                                        </div>
                                       
                                    </td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-naranja w-100'>REGISTRAR UNA RESEÑA</button>
                </main>

            </div>

        </>
    );
}

export default AdminReviews;