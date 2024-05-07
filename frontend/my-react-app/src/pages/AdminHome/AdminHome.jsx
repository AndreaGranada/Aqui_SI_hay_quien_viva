import "./AdminHome.css";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { useEffect, useState } from "react";
import { getAllReviewsByApartments } from "../../services/apartmentsReviews.service";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchReviewsByApartments = async () => {
      try {
        const reviews = await getAllReviewsByApartments();
        setData(reviews);
      } catch (error) {
        console.error("Error al obtener los distritos:", error);
      }
    };

    fetchReviewsByApartments();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className="container-fluid row">
        <MenuAdmin />
        <main className="name col ms-5 mt-5 mb-5">
          <h1 className="mb-5 text-center">
            Bienvenido al panel del administrador
          </h1>
          <div>
            {data.map((apartment) => (
              <div key={apartment.id} className="bt-5">
                <h4 className="bg-warning">{`Reviews para ${apartment.road} ${apartment.roadName}, ID del Apartamento: ${apartment.id}`}</h4>
                <div className="table-responsive">
                  <table className="table table-striped table-hover mb-5">
                    <thead>
                      <tr className="table-dark table-marron">
                        <th className="col-1">ID</th>
                        <th className="col-2">Imagen</th>
                        <th className="col-1">Titulo</th>
                        <th className="col-5">Contenido</th>
                        <th className="col-1">Fecha</th>
                        <th className="col-1">PostedStatus</th>
                        <th className="col-1"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {apartment.reviews.map((review, index) => (
                        <tr
                          key={index}
                          className={
                            review.postedStatus === "no" ? "table-danger" : ""
                          }
                        >
                          <td className="align-middle text-center">
                            {review.id}
                          </td>
                          <td className="align-middle text-center">
                            <img src={review.media} width="150px" alt="" />
                          </td>
                          <td className="align-middle text-center">
                            {review.title}
                          </td>
                          <td className="align-middle text-center">
                            {review.content}
                          </td>
                          <td className="align-middle text-center">
                            {formatDate(review.datePost)}
                          </td>
                          <td className="align-middle text-center">
                            {review.postedStatus}
                          </td>
                          <td className="text-center align-middle">
                            <div
                              className="d-flex justify-content-center align-items-center"
                              style={{ height: "100%" }}
                            >
                              <Link to={`/admin/reviews/${review.id}`}>
                                {" "}
                                <button className="btn-naranja btn">
                                  EDITAR
                                </button>
                              </Link>
                            </div>
                          </td>{" "}
                          {/* Botón para cada fila */}
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
  );
};

export default AdminHome;
