import React, { useEffect, useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ApartmentReviews from "../../components/ApartmentReview/ApartmentReview";
import { useLocation } from 'react-router-dom';
import "./FilteredReviews.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const FilteredReviews = () => {
  const location = useLocation();
  const { reviews, filters } = location.state || {}; // Si location.state es undefined, asigna un objeto vacío por defecto
  const [filteredReviews, setFilteredReviews] = useState([]);

  // Función para eliminar tildes de una cadena
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    // Filtra las reseñas según los filtros
    if (reviews && filters) {
      let filtered = reviews;

      // Normaliza las propiedades del objeto filters a minúsculas y sin tildes
      const normalizedFilters = Object.keys(filters).reduce((acc, key) => {
        const value = filters[key];
        if (value !== undefined) {
          acc[key.toLowerCase()] = removeAccents(value.toLowerCase().trim()); // Convertir a minúsculas, eliminar espacios en blanco adicionales y quitar tildes
        }
        return acc;
      }, {});
      console.log(normalizedFilters)
      // Aplica cada filtro
      if (normalizedFilters.postalCode) {
        console.log("Filtro de código postal:", normalizedFilters.postalCode); // Agregar un registro para el filtro postal
        const normalizedPostalCode = normalizedFilters.postalCode.toLowerCase().trim(); // Convertir el valor del filtro a minúsculas y quitar espacios en blanco adicionales
        filtered = filtered.filter(review => {
          const reviewPostalCode = review.postalCode ? review.postalCode.toLowerCase().trim() : ''; // Verificar si review.postalcode está definido
          console.log("Código postal de la revisión:", reviewPostalCode, "Código postal normalizado:", normalizedPostalCode); // Agregar registros para el código postal de la revisión y el código postal normalizado
          return reviewPostalCode === normalizedPostalCode; // Comparar las cadenas
        });
      }
      if (normalizedFilters.districtid) {
        console.log("Filtrando por distrito:", normalizedFilters.districtid);

        filtered = filtered.filter(review => {
          const normalizedReviewDistrict = review.districtId; // No necesitas normalizar el distrito si es un número
          console.log("Distrito en la revisión:", normalizedReviewDistrict);
          return review.districtId == normalizedFilters.districtid;
        });
      }
      if (normalizedFilters.road) {
        filtered = filtered.filter(review => {
          const normalizedRoad = removeAccents(review.road).toLowerCase().trim();
          return review.road && normalizedRoad === normalizedFilters.road;
        });
      }
      if (normalizedFilters.roadname) {
        filtered = filtered.filter(review => {
          const normalizedRoadName = removeAccents(review.roadName).toLowerCase().trim();
          return review.roadName && normalizedRoadName === normalizedFilters.roadname;
        });
      }

      setFilteredReviews(filtered);
    } else {
      setFilteredReviews([]);
    }
  }, [reviews, filters]);
  //console.log(reviews, filters)
  return (
    <>
      <NavBar />
      <div className='container'>

        <div className="resultados-busqueda mt-5 mb-5 p-3">

          {/* Puedes usar los filtros aquí si es necesario */}
          {filters && ( // Verifica si filters está definido antes de intentar acceder a sus propiedades
            <div>
              <ul className='fs-3'>Filtros aplicados:</ul>
              {filters.postalCode && <li className='ms-5'>Código Postal: {filters.postalCode}</li>}
              {filters.districtId && <li className='ms-5'>Distrito: {filters.districtId}</li>}
              {filters.road && <li className='ms-5'>Tipo de vía: {filters.road}</li>}
              {filters.roadName && <li className='ms-5'>Nombre de la vía: {filters.roadName}</li>}
            </div>
          )}
        </div>
        <h2 className='text-center mt-5'>Resultados de la búsqueda:</h2>
        <ul className='text-decoration-none'>
          {filteredReviews && filteredReviews.map((review, index) => (
            <div className="col-12 mt-5 mb-5 p-5 reseña-apartamento">
              <li className="text-decoration-none" style={{ textDecoration: 'none' }} key={index}>
                <h3>{review.road} {review.roadName}</h3>
                <p>Código Postal: {review.postalCode}</p>
                <p>Distrito: {review.districtId} </p>
                <p>Detalles: {review.extraInfo}</p>
                <div>
                  {review.reviews.map((reviewItem, reviewIndex) => (
                    <div key={reviewIndex}>
                      <div className='row reseñas-filtro p-3 mt-5 align-items-center'>
                        <div className="imagen-reseña col-3">
                        <img src={reviewItem.media} width="100%" height="auto"></img>
                        </div>
                        <div className='col-9'>
                        <h5>{reviewItem.title}</h5>
                        <p>{reviewItem.content}</p>
                        <p>{reviewItem.datePost}</p>
                        </div>

                        
                        
                        {/* Agrega más detalles de la revisión si es necesario */}
                      </div>
                    </div>
                  ))}
                  <button style={{ width: '100%' }} className='text-center mt-5'>DEJAR RESEÑA</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default FilteredReviews;