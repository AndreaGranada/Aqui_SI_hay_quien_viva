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