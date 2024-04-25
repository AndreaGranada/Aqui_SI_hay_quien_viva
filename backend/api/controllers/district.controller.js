const District = require("../models/district.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//CRUD ADMIN

//Bulk Create (admin)
const bulkCreateDistrict = async (req, res) => {
    const districtData = req.body;

    try {
      // Realiza la operación de bulk create
      const district = await District.bulkCreate(districtData);
      console.log(`${district.length} distritos creados correctamente.`);
      res.status(201).json(district);
    } catch (error) {
      console.error('Error al crear distritos:', error);
      res.status(500).json({ error: 'Error al crear distritos' });
    }
};
//Create one district (admin)

const createDistrict = async (req, res) => {
    try {
      const district = await District.create({
        name: req.body.name,
        
      });
      return res.status(200).json(district);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };
/*
// Get One User (admin)
async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}



//Update User (admin)

async function updateUser(req, res) {
	try {
		const [user] = await User.update(req.body, {
			returning: true,
			where: {
				id: req.params.userId,
			},
		})
		if (user !== 0) {
			return res.status(200).json({ message: 'User updated', user: user })
		} else {
			return res.status(404).send('User not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


// Get Own Profile - User
const getOwnUser = async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.user.id, {
      attributes: {
        exclude: "password",
      },
    });
    console.log(user);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found cont");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Update Own Profile - User

async function updateOwnUser(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id, {
      attributes: {
        exclude: ["password", "role"],
      },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }
    delete req.body.role;
    const updatedUser = await user.update(req.body);

    return res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// Delete Own Profile - User
const deleteOwnProfile = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: res.locals.user.id,
      },
    });
    if (user > 0) {
      return res.status(200).json("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
// Delete one profile - Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    if (user > 0) {
      return res.status(200).json("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
*/
module.exports = {
    bulkCreateDistrict
};
