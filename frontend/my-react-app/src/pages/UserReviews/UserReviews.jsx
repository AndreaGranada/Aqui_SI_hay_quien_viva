import { useState, useEffect } from "react";
import { deleteOwnReview, getOwnReviews } from "../../services/user.service"
import "./UserReviews.css"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";


function UserReviews() {
  const [reviewData, setReviewData] = useState([]); // Estado para almacenar las revisiones propias
  const { reviewId } = useParams(); // Obtener el reviewId de los parámetros de la URL

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtener el token de autenticación del localStorage al montar el componente

    if (token) {
      showReviews(token); // Llamar a la función showReviews si hay un token
    } else {
      console.log("No hay token almacenado en localStorage");
    }
  }, []);

  // Función asincrónica para obtener las revisiones propias del usuario
  const showReviews = async (token) => {
    try {
      const data = await getOwnReviews(token); // Obtener las revisiones propias utilizando el token
      setReviewData(data); // Establecer las revisiones en el estado reviewData
    } catch (error) {
      console.log("Error al obtener el perfil: ", error.message);
    }
  };

  // Función asincrónica para manejar la eliminación de una revisión
  const handleDeleteReview = async (reviewId) => {
    try {
      console.log(reviewId)
      const token = localStorage.getItem("token")
      console.log(token); // Obtener el token de autenticación del localStorage
      await deleteOwnReview(reviewId, token); // Eliminar la revisión utilizando el servicio deleteOwnReview
      // Actualizar la lista de revisiones después de eliminar una
      console.log(reviewId)
      const updatedReviews = reviewData.filter((review) => review.id !== reviewId);
      console.log(updatedReviews)
      setReviewData(updatedReviews); // Actualizar el estado reviewData
      console.log("Revisión eliminada con éxito");
    } catch (error) {
      console.error("Error al eliminar tu revisión:", error);
    }
  };


  return (
    <>
      <NavBar />
      <div className="container">
        {reviewData &&
          reviewData.map((review) => (
            <div className="row mb-5 reseña-review" key={review.id}>
              <div className="col-3">
                <img width="100%" src={review.media} alt="Imagen de la reseña" />
              </div>
              <div className="col-8 ms-5">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
                    <p>Fecha de publicación: {review.datePost}</p>
                    <p>{review.postedStatus}</p>
                    <Link to={`/user/legaldocs/${review.id}`}>
                    <p>Ver LegalDoc Asociada</p>
                    </Link>
                  </div>
                  <button
                    className="btn btn-sm btn-danger btn-delete"
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    Eliminar reseña
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}

export default UserReviews;
