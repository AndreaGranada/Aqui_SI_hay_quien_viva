const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const {getAllLegalDocs, 
    createLegalDoc,
    getOneLegalDoc,
    updateLegalDoc,
    deleteLegalDoc,
    getUserLegalDoc
} = require('../controllers/legalDocs.controller')

router
    .get('/', checkAuth, checkAdmin, getAllLegalDocs)
    .get('/user/:reviewId', checkAuth, getUserLegalDoc)
    .post('/', checkAuth, createLegalDoc)
    .get('/:legalDocId', checkAuth, checkAdmin, getOneLegalDoc)
    .patch('/:legalDocId', checkAuth, checkAdmin, updateLegalDoc)
    .delete('/:legalDocId', checkAuth, checkAdmin, deleteLegalDoc)


module.exports = router