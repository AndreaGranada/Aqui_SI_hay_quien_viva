//import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import { getSixApartmentsReviews } from '../../services/apartmentsReviews.service';

function ListApartment({sixApartment, setSixApartment}) {

  useEffect(() => {
    async function fetchData() {
      const result = await getSixApartmentsReviews();
      setSixApartment(result);
      console.log(result);
    }
    
    fetchData();
  }, []);

  return (
    <Container>
      <div className="row">
        <h3 className='mb-5 text-center fs-2'>Algunas de nuestras reseñas</h3>
        {sixApartment.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
        <button className='button mb-5 btn-reseña p-4'>No ves tu piso aquí y quieres dejar una reseña? ¡REGISTRALO!</button>
      </div>
    </Container>
  );

}

export default ListApartment;