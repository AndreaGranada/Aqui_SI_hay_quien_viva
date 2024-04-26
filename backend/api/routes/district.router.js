const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const{
    bulkCreateDistrict,
    createDistrict,
    getAllDistrict,
    getOneDistrict,
    updateDistrict,
    deleteDistrict
} = require('../controllers/district.controller')

router
    .post('/bulk', checkAuth, checkAdmin, bulkCreateDistrict)
    .post('/', checkAuth, checkAdmin, createDistrict)
    .get('/', getAllDistrict)
    .get('/:districtId', getOneDistrict)
    .patch('/:districtId',checkAuth, checkAdmin, updateDistrict)
    .delete('/:districtId',checkAuth, checkAdmin, deleteDistrict)



module.exports = router
