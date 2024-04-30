import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import { Card, Button } from 'react-bootstrap';
function ApartmentCard({ apartment }) {
  return (
    <div className="col-md-4 apartamento col-sm-12 mb-5">
      <div className="card_apartment">
        <div className="titulo_reseña text-center mb-4">
          <h3>{apartment.roadName}</h3>
          <h4>{apartment.road}</h4>
        </div>
        {apartment.reviews.map(review => (
          <div key={review.id} className="row reseña align-items-center">
            <div className="col-md-3">
              <img src={`${review.media}`} alt="" />
            </div>
            <div className="col-md-6 mt-3">
              <h6>{review.title}</h6>
              <p>{review.content}</p>
            </div>
            <div className="col-md-3">
              <button className="btn-reseña">Leer</button>
            </div>
          </div>
        ))}
        <div className="row btn-ver-todos">
          <div className="col-md-12">
          <Link to={`/apartment/${apartment.id}`}>
          <button>Ver todas las reseñas</button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;

