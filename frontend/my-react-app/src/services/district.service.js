import api from "./config.service"

export async function getAllDistricts() {
    try {
      const {data}   = await api.get(`/districts`);
      //console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // puedes manejar el error según sea necesario
    }
  }

  export const getDistrictById = async (id, token) => {
    // const token = localStorage.getItem('token');
     //console.log(token)
     try {
       const { data } = await api.get(`/districts/${id}`, {
         headers: {
           Authorization: token,
         },
       })
       return data
   
     } catch (error) {
       console.log('Error getting district: ', error.message)
     }
   }
   
   export const updateDistrict = async (id, token, formData) => {
       try {
           const response = await api.patch(`/districts/${id}`, formData, {
               headers: {
                   Authorization: `${token}`,
               },
           });
           return response.data;
       } catch (error) {
           console.log('Error updating district: ', error.message);
           throw error;
       }
   };
   
     export const deleteDistricts = async (token, id) => {
       const response = await api.delete(`/districts/${id}`, {
           headers: {
               Authorization: `${token}`
           }
       });
       return response.data;
   };