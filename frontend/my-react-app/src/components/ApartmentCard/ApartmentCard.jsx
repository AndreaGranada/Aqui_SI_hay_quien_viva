import React from 'react'
//import { Link } from 'react-router-dom'
import './ApartmentCard.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import { Card, Button } from 'react-bootstrap';
function ApartmentCard() {
  return (
    <div className="col-md-4 apartamento col-sm-12 mb-5">
      <div className="card_apartment">
        <div className="titulo_reseña text-center mb-4">
          <h3>Zaidin</h3>
          <h4>Avenida de America</h4>
        </div>
        <div className="row reseña align-items-center">
          <div className="col-md-3">
            <img src="https://adiseal.com/wp-content/uploads/2020/09/roof-leak.jpg" alt="" />
          </div>
          <div className="col-md-6 mt-3">
            <h6>Goteras en la casa</h6>
            <p>Lorem ipsum, dolor si amet consectetur</p>
          </div>
          <div className="col-md-3">
            <button className="btn-reseña">Leer</button>
          </div>
        </div>
        <div className="row reseña align-items-center">
          <div className="col-md-3">
            <img src="https://adiseal.com/wp-content/uploads/2020/09/roof-leak.jpg" alt="" />
          </div>
          <div className="col-md-6 mt-3">
            <h6>Vecinos molestos</h6>
            <p>Lorem ipsum, dolor si amet consectetur</p>
          </div>
          <div className="col-md-3">
            <button className="btn-reseña">Leer</button>
          </div>
        </div>
        <div className="row btn-ver-todos">
          <div className="col-md-12">
            <button>Ver todas las reseñas</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ApartmentCard;