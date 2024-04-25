const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const {
    seeAllApartments,
    seeOneApartment,
    getAllApartments,
    getOneApartment,
    postOneApartment,
    createOneApartment, 
    updateApartment,
    deleteApartment 
} = require('../controllers/apartment.controller')

router
    .get('/', seeAllApartments)
    .get('/:apartmentId', seeOneApartment)


module.exports = router