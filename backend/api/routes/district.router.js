const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const{
    bulkCreateDistrict
} = require('../controllers/district.controller')

router
    .post('/', checkAuth, checkAdmin, bulkCreateDistrict)



module.exports = router
