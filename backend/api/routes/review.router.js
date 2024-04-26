const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const{
    createReview,
    getAllReviews,
    getAllApartmentReviews,
    getAllUserReviews,
    getAllOwnerUserReviews,
    getOneReview,
    updateReviews,
    deleteReviews
} = require('../controllers/review.controller')

router
    .post('/', checkAuth, createReview)
    .get('/', checkAuth, getAllReviews)
    .get('/:reviewId', checkAuth, checkAdmin, getOneReview)
    .get('/apartment/:apartmentId', checkAuth, getAllApartmentReviews)
    .get('/user', checkAuth, getAllOwnerUserReviews)
    .get('/user/:userId', checkAuth, checkAdmin, getAllUserReviews)
    .patch('/:reviewId', checkAuth, checkAdmin, updateReviews)
    .delete('/:reviewId', checkAuth, checkAdmin, deleteReviews)
    



module.exports = router