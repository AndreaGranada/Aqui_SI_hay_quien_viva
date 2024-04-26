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

  // Get All District - User y admin
  const getAllDistrict = async (req, res) => {
    try {
      const district = await District.findAll();
      return res.status(200).json(district);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };

// Get One District (user y admin)
async function getOneDistrict(req, res) {
  try {
    const district = await District.findByPk(req.params.districtId);
    if (district) {
      return res.status(200).json(district);
    } else {
      return res.status(404).send("District not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//Update District (admin)

async function updateDistrict(req, res) {
	try {
		const district = await District.update(req.body, {
			returning: true,
			where: {
				id: req.params.districtId,
			},
		})
		if (district !== 0) {
			return res.status(200).json({ message: 'District updated', district })
		} else {
			return res.status(404).send('District not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}




// Delete one profile - Admin
const deleteDistrict = async (req, res) => {
  try {
    const district = await District.destroy({
      where: {
        id: req.params.districtId,
      },
    });
    if (district > 0) {
      return res.status(200).json("District deleted");
    } else {
      return res.status(404).send("District not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
    bulkCreateDistrict,
    createDistrict,
    getAllDistrict,
    getOneDistrict, 
    updateDistrict,
    deleteDistrict
};
