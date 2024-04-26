const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const {getAllLegalDocs, 
    createLegalDoc,
    getOneLegalDoc,
    updateLegalDoc,
    deleteLegalDoc
} = require('../controllers/legalDocs.controller')

router
    .get('/', checkAuth, checkAdmin, getAllLegalDocs)
    .post('/', checkAuth, createLegalDoc)
    .get('/:legalDocId', checkAuth, checkAdmin, getOneLegalDoc)
    .patch('/:legalDocId', checkAuth, checkAdmin, updateLegalDoc)
    .delete('/:legalDocId', checkAuth, checkAdmin, deleteLegalDoc)


module.exports = router