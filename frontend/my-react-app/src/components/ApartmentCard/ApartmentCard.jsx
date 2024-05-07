import React from 'react';
import { Link } from 'react-router-dom';
import './ApartmentCard.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import { Card, Button } from 'react-bootstrap';

function ApartmentCard({ apartment }) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncatedText = text.split(' ').slice(0, 5).join(' ');
    return `${truncatedText}...`;
  };

  return (
    <div className="col-md-4 apartamento col-sm-12 align-items-stretch mb-5">
      <div className="card_apartment">
        <div className="titulo_reseña text-center mb-4">
          <h3>{apartment.road}</h3>
          <h4>{apartment.roadName}</h4>
        </div>
        {apartment.reviews.map(review => (
          // Verifica si el review.postedStatus es "no", si es así, no muestra la revisión
          review.postedStatus !== "no" && (
            <div key={review.id} className="row reseña align-items-center">
              <div className="col-md-3">
                <img src={`${review.media}`} alt="" />
              </div>
              <div className="col-md-9 mt-3">
                <h6>{review.title}</h6>
                <p>{truncateText(review.content, 30)}</p>
              </div>
            </div>
          )
        ))}
        <div className="row btn-ver-todos">
          <div className="col-md-12 text-center">
            <Link to={`/apartment/${apartment.id}`}>
              <button className='btn-reseñas'>Ver todas las reseñas</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;

