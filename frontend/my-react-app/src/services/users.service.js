import api from "./config.service"

export async function getAllUsers(token) {
    try {
        const response = await api.get(`/users`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
  }

  export const deleteUser = async (token, id) => {
    const response = await api.delete(`/users/${id}`, {
        headers: {
            Authorization: `${token}`
        }
    });
    return response.data;
};

export const getUserById = async (id, token) => {
    // const token = localStorage.getItem('token');
     //console.log(token)
     try {
       const { data } = await api.get(`/users/${id}`, {
         headers: {
           Authorization: token,
         },
       })
       return data
   
     } catch (error) {
       console.log('Error getting user: ', error.message)
     }
   }
   
   export const updateUser = async (id, token, formData) => {
       try {
           const response = await api.patch(`/users/${id}`, formData, {
               headers: {
                   Authorization: `${token}`,
               },
           });
           return response.data;
       } catch (error) {
           console.log('Error updating user: ', error.message);
           throw error;
       }
   };
   