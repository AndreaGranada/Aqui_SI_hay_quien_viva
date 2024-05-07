import { useState, useEffect } from "react";
import { deleteOwnReview, getOwnReviews } from "../../services/user.service"
import "./UserReviews.css"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";


function UserReviews() {
  const [reviewData, setReviewData] = useState([]); 
  const { reviewId } = useParams(); 

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    if (token) {
      showReviews(token); 
    } else {
      console.log("No hay token almacenado en localStorage");
    }
  }, []);

  // Función asincrónica para obtener las revisiones propias del usuario
  const showReviews = async (token) => {
    try {
      const data = await getOwnReviews(token); 
      setReviewData(data); 
    } catch (error) {
      console.log("Error al obtener el perfil: ", error.message);
    }
  };

  // Función asincrónica para manejar la eliminación de una revisión
  const handleDeleteReview = async (reviewId) => {
    try {
      console.log(reviewId)
      const token = localStorage.getItem("token")
      console.log(token); 
      await deleteOwnReview(reviewId, token); 
  
      console.log(reviewId)
      const updatedReviews = reviewData.filter((review) => review.id !== reviewId);
      console.log(updatedReviews)
      setReviewData(updatedReviews); 
      console.log("Revisión eliminada con éxito");
    } catch (error) {
      console.error("Error al eliminar tu revisión:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="mis_reseñas">
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
                    <p>Fecha de publicación: {formatDate(review.datePost)}</p>
                    <p>¿Está publicada? {review.postedStatus}</p>
                    <Link to={`/user/legaldocs/${review.id}`}>
                    <p><u>Ver LegalDoc Asociada</u></p>
                    </Link>
                  </div>
                  <button width="20%"
                    className="btn btn-danger btn-delete ms-3"
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
      <Footer />
    </>
  );
}

export default UserReviews;
