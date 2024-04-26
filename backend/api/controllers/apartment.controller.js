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
            districtId: req.body.districtId
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Something went wrong"})
        }
        
    }






// //admin

// const updateApartment = async (req, res) => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({message: "Something went wrong"})
//         }
        
//     }
// }

// //admin

// const deleteApartment = async (req, res) => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({message: "Something went wrong"})
//         }
        
//     }
// }


module.exports = {
    getAllApartments,
    getOneApartment,
 
    createOneApartment, 
    // updateApartment,
    // deleteApartment 

}