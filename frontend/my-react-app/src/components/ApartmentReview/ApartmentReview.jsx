import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByApartmentId } from '../../services/apartmentsReviews.service';
import './ApartmentReview.css'

function ApartmentReviews() {
  const { apartmentId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [apartmentInfo, setApartmentInfo] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getReviewsByApartmentId(apartmentId);
        const apartaments = reviews[0].apartment
        setReviews(reviews);
        console.log(reviews)
        setApartmentInfo(apartaments)
        console.log(apartaments)

        //setApartmentInfo(apartment);
      } catch (error) {
        console.error("Error al obtener las reseñas del apartamento:", error);
      }
    }

    fetchReviews();
  }, [apartmentId]);

  return (
    <div className='container'>
      <div className="row ">
        <div className="infoPiso mt-5 mb-3 text-center col-12">
          {/* Renderizar la información del apartamento */}
          {apartmentInfo && (
            <div>
              <h2>{apartmentInfo.road} {apartmentInfo.roadName}</h2>
              <p>{apartmentInfo.extraInfo}</p>
              {/* Agrega cualquier otra información del apartamento que desees mostrar */}
            </div>
          )}
        </div>

        <div className="col-12">

          {/* Renderizar las reseñas del apartamento */}
          {reviews && reviews.map(review => (
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
          ))}
        </div>
        <div className="col-12 text-center mb-5">
          <button type='button' className='text-center px-5'>DEJAR RESEÑA</button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentReviews;