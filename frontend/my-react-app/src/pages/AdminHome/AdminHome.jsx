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

      console.log(data)
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
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr className="table-dark">
                                    <th>Road</th>
                                    <th>Road Name</th>
                                    <th>ID del Apartamento</th>
                                    <th>Review</th>
                                    <th>PostedStatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apartment.reviews.map((review, index) => (
                                    <tr key={index} className={review.postedStatus === 'no' ? 'table-danger' : ''}>
                                        <td>{apartment.road}</td>
                                        <td>{apartment.roadName}</td>
                                        <td>{apartment.id}</td>
                                        <td>{review.content}</td>
                                        <td>{review.postedStatus}</td>
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