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
     // console.log(data)
      return data;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error('Error al obtener las reseñas del apartamento:', error);
      throw error; // Lanzar el error para que pueda ser manejado por el componente que llama a esta función
    }
  }
  
  export async function getAllReviewsByApartments() {
    try {
      // Realizar una solicitud GET al servidor
      const {data} = await api.get(`/reviews/apartments`);
      // Devolver los datos de las reseñas obtenidos del servidor
      //console.log(data)
      return data;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error('Error al obtener las reseñas del apartamento:', error);
      throw error; // Lanzar el error para que pueda ser manejado por el componente que llama a esta función
    }
  }

  export async function getOneReview(reviewId, token) {
    try {
        const response = await api.get(`/reviews/${reviewId}`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getAllApartment(token) {
  try {
      const response = await api.get(`/apartments`, {
          headers: {
              Authorization: `${token}`,
          },
      });
      return response.data;
  } catch (error) {
      throw error;
  }
}

export async function getAllReviews(token) {
  try {
      const response = await api.get(`/reviews`, {
          headers: {
              Authorization: `${token}`,
          },
      });
      return response.data;
  } catch (error) {
      throw error;
  }
}

export const deleteReviews = async (token, id) => {
  const response = await api.delete(`/reviews/${id}`, {
      headers: {
          Authorization: `${token}`
      }
  });
  return response.data;
};

export const createReview = async (title, content, media, legalDocId, apartmentId, userId) => {
  const token = localStorage.getItem('token');
  console.log(token);
  try {
    const { data } = await api.post('/reviews', {
        title:title,
        content: content,
        media: media,
        legalDocId: legalDocId,
        apartmentId: apartmentId,
        userId: userId
    }, {
      headers: {
        Authorization: token,
      }
    });
    return data;
  } catch (error) {
    console.log('Error creating review: ', error.message);
  }
}

export const updateReview = async (id, token, formData) => {
  try {
      const response = await api.patch(`/reviews/${id}`, formData, {
          headers: {
              Authorization: `${token}`,
          },
      });
      return response.data;
  } catch (error) {
      console.log('Error updating review: ', error.message);
      throw error;
  }
};
