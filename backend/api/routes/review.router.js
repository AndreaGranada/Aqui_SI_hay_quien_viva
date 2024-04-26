const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const{
    createReview,

} = require('../controllers/review.controller')

router
    .post('/', checkAuth, createReview)
    



module.exports = router