import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import './Filters.css'
function Filters() {
  return (
    <>
    <Container>
      <form action='' className="row formulario mt-5 mb-5">
        <div className="col-md-4 campo">
          <label htmlFor="codigo-postal" className='form-label'>Código Postal</label>
          <input type="text" id="codigo-postal" name="codigo-postal" placeholder="Ingrese el código postal" className='form-control' />
        </div>
        <div className="col-md-4 campo">
          <label htmlFor="categoria" className='form-label'>Districto</label>
          <select id="categoria" name="categoria" className='form-select'>
            <option value="">Seleccione un distrito</option>
            <option value="centro">Centro</option>
            <option value="moda">Moda</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
        <div className="col-md-4 campo">
          <label htmlFor="ordenarPor" className='form-label'>Tipo de vía</label>
          <select id="ordenarPor" name="ordenarPor" className='form-select'>
            <option value="">Seleccione el tipo de vía</option>
            <option value="precioAsc">Calle</option>
            <option value="precioDesc">Avenida</option>
            <option value="nombreAsc">Plaza</option>
          </select>
        </div>
        <div className="col-md-12 buscador campo">
          <div className="input-group">
          <label htmlFor="via" className='input-group-text'>Nombre de la vía</label>
          <input className="input-buscador form-control" type="text" id="via" name="via" placeholder="Ingrese término de búsqueda.." />
          <input type="submit" value="Buscar" className='btn' />
          </div>
          
        </div>
      </form>
      </Container>
    </>
  );
}

export default Filters;