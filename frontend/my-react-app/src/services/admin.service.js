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

export const createUserAdmin = async (name, surname, email, password, dni, phone) => {
  const token = localStorage.getItem('token');
  console.log(token);
  try {
    const { data } = await api.post('/users', {
      name: name,
      surname: surname,
      email: email,
      password: password,
      dni: dni, 
      phone: phone
    }, {
      headers: {
        Authorization: token,
      }
    });
    return data;
  } catch (error) {
    console.log('Error creating user: ', error.message);
  }
}

export const createApartmentAdmin = async (road, roadName, postalCode, extraInfo, districtId) => {
  const token = localStorage.getItem('token');
  console.log(token);
  try {
    const { data } = await api.post('/apartments', {
        road:road,
        roadName: roadName, 
        postalCode: postalCode,
        extraInfo: extraInfo,
        districtId:districtId
    }, {
      headers: {
        Authorization: token,
      }
    });
    return data;
  } catch (error) {
    console.log('Error creating apartment: ', error.message);
  }
}

export const createDistrictAdmin = async (name) => {
  const token = localStorage.getItem('token');
  console.log(token);
  try {
    const { data } = await api.post('/districts', {
        name:name,
    }, {
      headers: {
        Authorization: token,
      }
    });
    return data;
  } catch (error) {
    console.log('Error creating district: ', error.message);
  }
}