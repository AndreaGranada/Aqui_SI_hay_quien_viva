import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getAllReviewsByApartments } from '../../services/apartmentsReviews.service'; // Asegúrate de importar tu función de API correctamente
import './Filters.css';

function Filters() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    postalCode: '',
    districtId: '',
    road: '',
    roadName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      // Realiza la solicitud a la API para obtener las reseñas según los filtros
      const reviews = await getAllReviewsByApartments(filters); // Pasar los filtros a la función getAllReviewsByApartments
  
      // Navega a la página FilteredReviews con las reseñas y los filtros como parte del estado
      navigate('/FilteredReviews', { state: { reviews, filters } }); // Incluir los filtros en el estado
    } catch (error) {
      console.error('Error al obtener las reseñas:', error);
      // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <Container>
      <form onSubmit={handleSearch} className="row formulario mt-5 mb-5">
        <div className="col-md-4 campo">
          <label htmlFor="codigo-postal" className='form-label'>Código Postal</label>
          <input type="text" id="codigo-postal" name="postalCode" value={filters.postalCode} onChange={handleInputChange} placeholder="Ingrese el código postal" className='form-control' />
        </div>
        <div className="col-md-4 campo">
          <label htmlFor="districto" className='form-label'>Distrito</label>
          <select id="districto" name="districtId" value={filters.districtId} onChange={handleInputChange} className='form-select'>
            <option value="">Seleccione un distrito</option>
            <option value="centro">Centro</option>
            <option value="moda">Moda</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
        <div className="col-md-4 campo">
          <label htmlFor="tipo-via" className='form-label'>Tipo de vía</label>
          <select id="tipo-via" name="road" value={filters.road} onChange={handleInputChange} className='form-select'>
            <option value="">Seleccione el tipo de vía</option>
            <option value="calle">Calle</option>
            <option value="avenida">Avenida</option>
            <option value="plaza">Plaza</option>
          </select>
        </div>
        <div className="col-md-12 buscador campo">
          <div className="input-group">
            <label htmlFor="nombre-via" className='input-group-text'>Nombre de la vía</label>
            <input className="input-buscador form-control" type="text" id="nombre-via" name="roadName" value={filters.RoadName} onChange={handleInputChange} placeholder="Ingrese término de búsqueda.." />
            <button type="submit" className='btn'>Buscar</button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Filters;