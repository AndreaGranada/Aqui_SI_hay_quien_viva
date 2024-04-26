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
    .post('/',checkAuth, createOneApartment)
    .patch('/:apartmentId', checkAuth, checkAdmin, updateApartment)
    .delete('/:apartmentId', checkAuth, checkAdmin, deleteApartment)

module.exports = router