import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviewsByApartmentId } from "../../services/apartmentsReviews.service";
import "./ApartmentReview.css";

function ApartmentReviews() {
  const { apartmentId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [apartmentInfo, setApartmentInfo] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getReviewsByApartmentId(apartmentId);
        const apartaments = reviews[0].apartment;
        setReviews(reviews);
        console.log(reviews);
        setApartmentInfo(apartaments);
        console.log(apartaments);

        //setApartmentInfo(apartment);
      } catch (error) {
        console.error("Error al obtener las reseñas del apartamento:", error);
      }
    }

    fetchReviews();
  }, [apartmentId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container">
      <div className="row apartamento-reseña ps-5 pe-5">
        <div className="infoPiso mt-5 mb-3 text-center col-12">
          {/* Renderizar la información del apartamento */}
          {apartmentInfo && (
            <div className="info-apartamento">
              <h2 className="fw-bolder">
                {apartmentInfo.road} {apartmentInfo.roadName}
              </h2>
              <p className="fw-bolder fs-2">{apartmentInfo.extraInfo}</p>
            </div>
          )}
        </div>

        <div className="col-12">
          {reviews &&
            reviews.map(
              (review) =>
                // Verifica si el review.postedStatus es "yes", si es así, muestra la revisión
                review.postedStatus === "yes" && (
                  <div className="row mb-5 reseña-review" key={review.id}>
                    <div className="col-3 align-middle">
                      <img
                        className="imagen-reseña"
                        width="100%"
                        src={review.media}
                        alt="Imagen de la reseña"
                      />
                    </div>
                    <div className="col-8 ms-5 align-middle">
                      <h3>{review.title}</h3>
                      <p>{review.content}</p>
                      <p>Fecha de publicación: {formatDate(review.datePost)}</p>
                    </div>
                  </div>
                )
            )}
        </div>
        <div className="col-12 text-center mb-5">
          <Link to={`/user/create/${apartmentId}`}>
            <button
              type="button"
              className="text-center px- btn-reseñas-apartamento fw-bolder"
            >
              DEJAR RESEÑA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApartmentReviews;
