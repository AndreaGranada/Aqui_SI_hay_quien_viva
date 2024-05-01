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