import "./AdminHome.css"
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { useEffect, useState } from "react";
import { getAllReviewsByApartments } from "../../services/apartmentsReviews.service";
const AdminHome = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Cuando el componente se monta, obtener los distritos disponibles
        const fetchDistricts = async () => {
          try {
            const reviews = await getAllReviewsByApartments();
            setData(reviews); // Actualizar el estado con los distritos obtenidos
          } catch (error) {
            console.error('Error al obtener los distritos:', error);
          }
        };
    
        fetchDistricts(); // Llamar a la función para obtener los distritos
      }, []);

     
    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin/>
                <main className="name col ms-5 mt-5 mb-5">
                    <h1 className="mb-5 text-center">Bienvenido al panel del administrador</h1>
                    <div>
                {data.map(apartment => (
                    <div key={apartment.id} className="bt-5">
                        <h4 className="bg-warning">{`Reviews para ${apartment.road} ${apartment.roadName}, ID del Apartamento: ${apartment.id}`}</h4>
                        <div  className="table-responsive">
                        <table className="table table-striped table-hover mb-5">
                            <thead>
                                <tr className="table-dark table-marron">
                                    <th className="col-1">Road</th>
                                    <th className="col-2">Road Name</th>
                                    <th className="col-1">ID del Apartamento</th>
                                    <th className="col-5">Review</th>
                                    <th className="col-1">PostedStatus</th>
                                    <th className="col-2"></th> 
                                </tr>
                            </thead>
                            <tbody>
                                {apartment.reviews.map((review, index) => (
                                    <tr key={index} className={review.postedStatus === 'no' ? 'table-danger' : ''}>
                                        <td className="align-middle text-center">{apartment.road}</td>
                                        <td className="align-middle text-center">{apartment.roadName}</td>
                                        <td className="align-middle text-center">{apartment.id}</td>
                                        <td className="align-middle text-center">{review.content}</td>
                                        <td className="align-middle text-center">{review.postedStatus}</td>
                                        <td className="text-center align-middle">
                                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                                        <button className="btn-naranja btn">VER MÁS</button>
                                                    </div>
                                                </td> {/* Botón para cada fila */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                      
                    </div>
                ))}
            </div>
                </main>
            </div>

        </>
    )
}

export default AdminHome