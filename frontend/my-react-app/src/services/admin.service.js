import api from "./config.service"



export const getAllUsers = async () => {
  const token = localStorage.getItem('token');
  console.log(token)
  try {
    const { data } = await api.get('/users', {
      headers: {
        Authorization: token,
      },
    })
    return data

  } catch (error) {
    console.log('Error getting users: ', error.message)
  }
}