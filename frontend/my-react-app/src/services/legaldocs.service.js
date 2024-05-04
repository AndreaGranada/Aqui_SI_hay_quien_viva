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

