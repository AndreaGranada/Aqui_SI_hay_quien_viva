import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByApartmentId } from '../../services/apartmentsReviews.service';

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
    <div>
      {/* Renderizar la información del apartamento */}
      {apartmentInfo && (
        <div>
          <h2>{apartmentInfo.road} {apartmentInfo.roadName}</h2>
          <p>{apartmentInfo.extraInfo}</p>
          {/* Agrega cualquier otra información del apartamento que desees mostrar */}
        </div>
      )}

      {/* Renderizar las reseñas del apartamento */}
      {reviews && reviews.map(review => (
        <div key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
          <img src={review.media} alt="Imagen de la reseña" />
          <p>Fecha de publicación: {review.datePost}</p>
          {/* Agrega aquí cualquier otra información que desees mostrar */}
        </div>
      ))}
    </div>
  );
}

export default ApartmentReviews;