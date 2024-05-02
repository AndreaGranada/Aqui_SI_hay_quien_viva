import api from "./config.service"


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
  