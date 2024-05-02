import { useState, useEffect } from "react";
import { getOwnReviews } from "../../services/user.service"

function UserReviews() {

const [reviewData, setReviewData] = useState('')

const showReviews = async (token) => {
  try {
    const data = await getOwnReviews(token);
    setReviewData(data);
  } catch (error) {
    console.log("Error al obtener el perfil: ", error.message);
  }
};

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    showReviews(token);
  } else {
    console.log("No hay token almacenado en localStorage");
  }
  console.log(reviewData)
}, []);

  return (
    <div>          
      {reviewData && reviewData.map(review => (
      <div className='row mb-5 reseña-review' key={review.id}>
        <div className="col-3">
          <img width="100%" src={review.media} alt="Imagen de la reseña" />
        </div>
        <div className="col-8 ms-5">
          <h3>{review.title}</h3>
          <p>{review.content}</p>

          <p>Fecha de publicación: {review.datePost}</p>
        </div>

        {/* Agrega aquí cualquier otra información que desees mostrar */}
      </div>
    ))}</div>
  )
}

export default UserReviews