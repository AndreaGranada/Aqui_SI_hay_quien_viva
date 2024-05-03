import api from "./config.service"

//Ver sus datos
export const getOwnProfile = async (token) => {
  
    try {
      const { data } = await api.get('/users/profile', {
        headers: {
          Authorization: token,
        },
      });
      console.log(data)
      return data;
    } catch (error) {
      console.log('Error getting own profile: ', error.message);
      throw error;
    }
  };
  
//editar perfil 
  export const UpdateOwnProfile = async (name, surname, email, dni, phone, token) => {
    try {
      const { data } = await api.patch('/users/profile', {
        name: name,
        surname: surname,
        email: email,
        dni: dni, 
        phone: phone
      }, {
        headers: {
          Authorization: token,
        }
      });
    
      return data;
    } catch (error) {
      console.log('Error updating own profile: ', error.message);
      throw error;
    }
  };
  

  //Ver sus reviews

  export const getOwnReviews = async (token) => {
  
    try {
      const { data } = await api.get('/reviews/user', {
        headers: {
          Authorization: token,
        },
      });
      console.log(data)
      return data;
    } catch (error) {
      console.log('Error getting your reviews: ', error.message);
      throw error;
    }
  };

  //Eliminar sus reviews

  export const deleteOwnReview = async (reviewId, token) => {
  
    try {
      const { data } = await api.delete(`/reviews/user/${reviewId}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(data)
      return data;
    } catch (error) {
      console.log('Error deleting your review: ', error.message);
      throw error;
    }
  };

  // Función para obtener la documentación legal asociada a una reseña de un usuario

export const getUserLegalDoc = async (reviewId, token) => {
  try {
    // Realizar la solicitud al backend para obtener la documentación legal
    const { data } = await api.get(`/legalDocs/user/${reviewId}`,{
      headers: {
        Authorization: token,
      },
    });
    // Devolver los datos de la documentación legal
    return data;
  } catch (error) {
    // Manejar errores si la solicitud falla
    console.error('Error al obtener la documentación legal:', error);
    throw error;
  }
};
