import api from "./config.service"

export async function getSixApartmentsReviews() {
    try {
      const {data}   = await api.get(`/reviews/sixApartments`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // puedes manejar el error según sea necesario
    }
  }