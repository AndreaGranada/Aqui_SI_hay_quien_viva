import api from "./config.service";


export const login = async (email, password) => {
  try {
    const { data } = await api.post('/auth/login', {
      email,
      password
    })

    return data

  } catch (error) {
    console.log('Error loging: ', error.message)
  }
}

// export const signup = async() =>{
//     try {
        
//     } catch (error) {
        
//     }
// }

