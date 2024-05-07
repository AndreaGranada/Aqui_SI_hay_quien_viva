import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ApartmentReviews from "../../components/ApartmentReview/ApartmentReview";
import { useLocation } from "react-router-dom";
import "./FilteredReviews.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
      console.log(normalizedFilters);
      // Aplica cada filtro
      if (normalizedFilters.postalCode) {
        console.log("Filtro de código postal:", normalizedFilters.postalCode); // Agregar un registro para el filtro postal
        const normalizedPostalCode = normalizedFilters.postalCode
          .toLowerCase()
          .trim(); // Convertir el valor del filtro a minúsculas y quitar espacios en blanco adicionales
        filtered = filtered.filter((review) => {
          const reviewPostalCode = review.postalCode
            ? review.postalCode.toLowerCase().trim()
            : ""; // Verificar si review.postalcode está definido
          console.log(
            "Código postal de la revisión:",
            reviewPostalCode,
            "Código postal normalizado:",
            normalizedPostalCode
          ); // Agregar registros para el código postal de la revisión y el código postal normalizado
          return reviewPostalCode === normalizedPostalCode; // Comparar las cadenas
        });
      }
      if (normalizedFilters.districtid) {
        console.log("Filtrando por distrito:", normalizedFilters.districtid);

        filtered = filtered.filter((review) => {
          const normalizedReviewDistrict = review.districtId; // No necesitas normalizar el distrito si es un número
          console.log("Distrito en la revisión:", normalizedReviewDistrict);
          return review.districtId == normalizedFilters.districtid;
        });
      }
      if (normalizedFilters.road) {
        filtered = filtered.filter((review) => {
          const normalizedRoad = removeAccents(review.road)
            .toLowerCase()
            .trim();
          return review.road && normalizedRoad === normalizedFilters.road;
        });
      }
      if (normalizedFilters.roadname) {
        filtered = filtered.filter((review) => {
          const normalizedRoadName = removeAccents(review.roadName)
            .toLowerCase()
            .trim();
          return (
            review.roadName && normalizedRoadName === normalizedFilters.roadname
          );
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
      <div className="container">
        <div className="resultados-busqueda mt-5 mb-5 p-3">
          {/* Puedes usar los filtros aquí si es necesario */}
          {filters && ( // Verifica si filters está definido antes de intentar acceder a sus propiedades
            <div>
              <ul className="fs-3">Filtros aplicados:</ul>
              {filters.postalCode && (
                <li className="ms-5">Código Postal: {filters.postalCode}</li>
              )}
              {filters.districtId && (
                <li className="ms-5">Distrito: {filters.districtId}</li>
              )}
              {filters.road && (
                <li className="ms-5">Tipo de vía: {filters.road}</li>
              )}
              {filters.roadName && (
                <li className="ms-5">Nombre de la vía: {filters.roadName}</li>
              )}
            </div>
          )}
        </div>
        <h2 className="text-center mt-5">Resultados de la búsqueda:</h2>
        <div>
         
          {filteredReviews &&
            filteredReviews.map((review, index) => (
              <div className="col-12 mt-5 mb-5 reseña-apartamento w-75" key={index}>
                <div className="titulo-reseñas p-2">


                  <h3 className="text-center titulo-reseñas white">
                    <strong className="white">
                      {review.road} {review.roadName} {review.extraInfo}
                    </strong>
                  </h3>
                  <p className="text-center titulo-reseñas">
                    <strong className="white">Código Postal: </strong>
                    {review.postalCode} <strong className="white">Distrito:</strong> {review.districtId}{" "}
                  </p>
                </div>
                {review.reviews.length > 0 && (
                  <div className="varias-reseñas">
                    <p className="text-center">Tiene {review.reviews.length} reseña(s).</p>
                    <div className="row">
                      {review.reviews.map(
                        (reviewItem, reviewIndex) =>
                          // Mostrar miniaturas de las imágenes junto a los títulos de las reseñas
                          reviewItem.postedStatus === "yes" && (
                            <div key={reviewIndex} className="col-6 d-flex justify-content-center align-items-start">
                              <div className="text-center">
                                <img
                                  src={reviewItem.media}
                                  alt={reviewItem.title}
                                  width="100%"

                                  className="mb-2"
                                />
                                <p>
                                  <em>{reviewItem.title}</em>
                                </p>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <Link to={`/apartment/${review.id}`}>
                    <button className="text-center mt-2 mb-4 w-75 btn-leer">
                      LEER RESEÑAS
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilteredReviews;
