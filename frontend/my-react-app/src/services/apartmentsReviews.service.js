import api from "./config.service"

export async function getSixApartmentsReviews() {
    try {
      const {data}   = await api.get(`/reviews/sixApartments`);
      //console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // puedes manejar el error según sea necesario
    }
  }

  export async function getReviewsByApartmentId(apartmentId) {
    try {
      // Realizar una solicitud GET al servidor
      const {data} = await api.get(`/reviews/apartment/${apartmentId}`);
      // Devolver los datos de las reseñas obtenidos del servidor
      console.log(data)
      return data;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error('Error al obtener las reseñas del apartamento:', error);
      throw error; // Lanzar el error para que pueda ser manejado por el componente que llama a esta función
    }
  }
  
