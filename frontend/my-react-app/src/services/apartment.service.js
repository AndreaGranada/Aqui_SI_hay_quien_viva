import api from "./config.service"



export const getApartmentById = async (id, token) => {
 // const token = localStorage.getItem('token');
  //console.log(token)
  try {
    const { data } = await api.get(`/apartments/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    return data

  } catch (error) {
    console.log('Error getting apartment: ', error.message)
  }
}

export const updateApartment = async (id, token, formData) => {
    try {
        const response = await api.patch(`/apartments/${id}`, formData, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error updating apartment: ', error.message);
        throw error;
    }
};

  export const deleteApartment = async (token, id) => {
    const response = await api.delete(`/apartments/${id}`, {
        headers: {
            Authorization: `${token}`
        }
    });
    return response.data;
};