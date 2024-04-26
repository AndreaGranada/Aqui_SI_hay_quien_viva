const Apartment = require('../models/apartment.model')


const getAllApartments = async (req, res) => {
    try {
        const apartments = await Apartment.findAll();
        return res.status(200).json(apartments);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
    };


const getOneApartment = async (req, res) => {
    try {
        const apartment = await Apartment.findByPk(req.params.apartmentId);
        if (!apartment) return res.status(404).send("Apartment not found");
        return res.status(200).json(apartment);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
    };

    const createOneApartment = async (req, res) => {
      try {
        const newApartment = await Apartment.create({
          road: req.body.road,
          roadName: req.body.roadName,
          postalCode: req.body.postalCode,
          extraInfo: req.body.extraInfo,
          districtId: req.body.districtId,
        });

        return res
          .status(200).json({ newApartment, message: "Apartment created" });
      } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "Something went wrong" });
      }
    };
    

//admin

async function updateApartment(req, res) {
	try {
		const [apartment] = await Apartment.update(req.body, {
			returning: true,
			where: {
				id: req.params.apartmentId,
			},
		})
		if (apartment !== 0) {
			return res.status(200).json({ message: 'Apartment updated', apartment })
		} else {
			return res.status(404).send('Apartment not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

//admin

const deleteApartment = async (req, res) => {
    try {
      const apartment = await Apartment.destroy({
        where: {
          id: req.params.apartmentId,
        },
      });
      if (apartment > 0) {
        return res.status(200).json("Apartment deleted");
      } else {
        return res.status(404).send("Apartment not found");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };


module.exports = {
    getAllApartments,
    getOneApartment,
    createOneApartment, 
    updateApartment,
    deleteApartment 

}