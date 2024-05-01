import React, { useEffect, useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ApartmentReviews from "../../components/ApartmentReview/ApartmentReview";
import { useLocation } from 'react-router-dom';

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
        filtered = filtered.filter(review => review.districtid && removeAccents(review.districtid.toLowerCase().trim()) === normalizedFilters.districtid);
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
  console.log(reviews, filters)
  return (
    <>
      <NavBar />
      <div>
        <h2>Resultados de la búsqueda:</h2>
        {/* Puedes usar los filtros aquí si es necesario */}
        {filters && ( // Verifica si filters está definido antes de intentar acceder a sus propiedades
          <div>
            <p>Filtros aplicados:</p>
            {filters.postalCode && <p>Código Postal: {filters.postalCode}</p>}
            {filters.districtId && <p>Distrito: {filters.districtId}</p>}
            {filters.road && <p>Tipo de vía: {filters.road}</p>}
            {filters.roadName && <p>Nombre de la vía: {filters.roadName}</p>}
          </div>
        )}
        <ul>
          {filteredReviews && filteredReviews.map((review, index) => (
            <li key={index}>
              <h3>{review.road} {review.roadName}</h3>
              <p>Puntuación: {review.puntuacion}</p>
              <h4>Reseñas:</h4>
              <ul>
                {review.reviews.map((reviewItem, reviewIndex) => (
                  <li key={reviewIndex}>
                    <h5>{reviewItem.title}</h5>
                    <p>{reviewItem.content}</p>
                    <img src={reviewItem.media}></img>
                    {/* Agrega más detalles de la revisión si es necesario */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default FilteredReviews;