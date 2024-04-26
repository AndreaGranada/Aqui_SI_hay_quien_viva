const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const {getAllLegalDocs, 
} = require('../controllers/legalDocs.controller')

router
    .get('/', checkAuth, checkAdmin, getAllLegalDocs)
module.exports = router