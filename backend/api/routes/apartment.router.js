const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const {
   

    getAllApartments,
    getOneApartment,
    createOneApartment, 
    updateApartment,
    deleteApartment 
} = require('../controllers/apartment.controller')

router
    .get('/', getAllApartments)
    .get('/:apartmentId', getOneApartment)
    .post('/',checkAuth,checkAdmin,createOneApartment)

module.exports = router