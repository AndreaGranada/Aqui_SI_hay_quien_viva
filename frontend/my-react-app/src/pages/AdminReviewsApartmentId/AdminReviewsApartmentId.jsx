import "./AdminReviewsApartmentId.css"
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneReview } from "../../services/apartmentsReviews.service.js";
const AdminReviewsApartmentId = () => {
    const { apartmentReviewId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchReviewsByApartments = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token)
                const data = await getOneReview(apartmentReviewId, token);
                setData(data);
            } catch (error) {
                console.error('Error al obtener las reviews:', error);
            }
        };
        fetchReviewsByApartments();
    }, []);

    console.log(data)
    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin />
                <main className="name col ms-5 mt-5 mb-5">
                    <h1 className="mb-5 text-center">Bienvenido al panel del administrador</h1>
                    <div className="tabla table-responsive">
                        <main className="name col ms-5 mt-5 mb-5">
                            <h1 className="mb-5 text-center">Reseña del Apartamento</h1>
                            <table className="table table-striped table-hover mb-5">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Título</th>
                                        <th>Contenido</th>
                                        <th>Imagen</th>
                                        <th>Legal Doc</th>
                                        <th>User Id</th>
                                        <th>Apartment Id</th>
                                        <th>Fecha de Publicación</th>
                                        <th>Posted Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.content}</td>
                                            <td><img src={data.media} alt="" /></td>
                                            <td>{data.legalDocId}</td>
                                            <td>{data.userId}</td>
                                            <td>{data.aparmentId}</td>
                                            <td>{data.datePost}</td>
                                            <td>{data.postedStatus}</td>
                                        </tr>
                                  
                                </tbody>
                            </table>
                        </main>
                    </div>
                </main>
            </div>

        </>
    )
}

export default AdminReviewsApartmentId