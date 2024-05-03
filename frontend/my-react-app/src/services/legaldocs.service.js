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


