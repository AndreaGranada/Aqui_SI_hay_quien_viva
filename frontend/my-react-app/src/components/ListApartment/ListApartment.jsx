//import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import { getSixApartmentsReviews } from '../../services/apartmentsReviews.service';
import "./ListApartment.css"
import { Link } from 'react-router-dom';
function ListApartment({sixApartment, setSixApartment}) {

  useEffect(() => {
    async function fetchData() {
      const result = await getSixApartmentsReviews();
      setSixApartment(result);
     // console.log(result);
    }
    
    fetchData();
  }, []);
console.log(sixApartment)
  return (
    <Container>
      <div className="row">
        <h3 className='mb-5 text-center fs-2'>Algunas de nuestras reseñas</h3>
        {sixApartment.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
        <Link to="/user/create"><button className='button mb-5 w-100 btn-mas p-4 fw-bold'>¿No ves tu piso aquí y quieres dejar una reseña? ¡REGISTRALO!</button></Link>
      </div>
    </Container>
  );

}

export default ListApartment;