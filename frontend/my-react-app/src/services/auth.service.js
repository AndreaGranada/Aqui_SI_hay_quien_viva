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

export const signup = async (name, surname, email, password, dni, phone ) => {
  try {
    const { data } = await api.post('/auth/signup', {
      name: name,
      surname: surname,
      email: email,
      password: password,
      dni: dni, 
      phone: phone
    });
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
