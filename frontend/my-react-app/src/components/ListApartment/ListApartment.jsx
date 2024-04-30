//import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import ApartmentCard from '../ApartmentCard/ApartmentCard';

function ListApartment() {
  return (
    <Container>
      <div className="row">
        <h3 className='mb-5 text-center fs-2'>Algunas de nuestras reseñas</h3>
        <ApartmentCard></ApartmentCard>
        <ApartmentCard></ApartmentCard>
        <ApartmentCard></ApartmentCard>
        <ApartmentCard></ApartmentCard>
        <ApartmentCard></ApartmentCard>
        <ApartmentCard></ApartmentCard>
        <button className='button mb-5 btn-reseña p-4'>No ves tu piso aquí y quieres dejar una reseña? ¡REGISTRALO!</button>
      </div>
    </Container>
  );
}

export default ListApartment;