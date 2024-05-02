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
                    <h2 className="mb-5 text-center">Reseña del Apartamento</h2>
                    <table className="table table-striped table-hover mb-5 table-responsive">
                        <thead>
                            <tr className="table-dark">
                                <th className="align-middle text-center">ID</th>
                                <th className="align-middle text-center">Título</th>
                                <th className="align-middle text-center">Contenido</th>
                                <th className="align-middle text-center">Imagen</th>
                                <th className="align-middle text-center">Legal Doc</th>
                                <th className="align-middle text-center">User Id</th>
                                <th className="align-middle text-center">Apartment Id</th>
                                <th className="align-middle text-center">Fecha de Publicación</th>
                                <th className="align-middle text-center">Posted Status</th>
                                <th className="align-middle text-center"></th>
                                <th className="align-middle text-center"></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr key={data.id}>
                                <td className="align-middle text-center">{data.id}</td>
                                <td className="align-middle text-center">{data.title}</td>
                                <td className="align-middle text-center">{data.content}</td>
                                <td className="align-middle text-center"><img src={data.media} alt="" /></td>
                                <td className="align-middle text-center">{data.legalDocId}</td>
                                <td className="align-middle text-center">{data.userId}</td>
                                <td className="align-middle text-center">{data.apartmentId}</td>
                                <td className="align-middle text-center">{data.datePost}</td>
                                <td className={data.postedStatus === 'yes' ? 'table-success align-middle text-center' : 'table-danger align-middle text-center'}>{data.postedStatus}</td>
                                <td className="text-center align-middle">
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                        <button className="btn-secondary btn">Editar</button>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                        <button className="btn-danger btn">Borrar</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </main>
            </div>


        </>
    )
}

export default AdminReviewsApartmentId