import api from "./config.service"

export async function getAllLegalDocs(token) {
    try {
        const response = await api.get(`/legalDocs`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
  }

  export const deleteLegalDocs = async (token, id) => {
    const response = await api.delete(`/legalDocs/${id}`, {
        headers: {
            Authorization: `${token}`
        }
    });
    return response.data;
  };

  export const createLegalDoc = async (document) => {
    const token = localStorage.getItem('token');
    console.log(token);
    try {
      const { data } = await api.post('/legalDocs', {
          document:document,
      }, {
        headers: {
          Authorization: token,
        }
      });
      return data;
    } catch (error) {
      console.log('Error creating legal doc: ', error.message);
    }
  }
  
  export const updateLegalDoc = async (id, token, formData) => {
    try {
        const response = await api.patch(`/legalDocs/${id}`, formData, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error updating legal doc: ', error.message);
        throw error;
    }
  };

  export async function getOneLegalDoc(id, token) {
    try {
        const response = await api.get(`/legalDocs/${id}`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}