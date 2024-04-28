const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const{
    createReview,
    getAllReviews,
    getAllApartmentReviews,
    getAllUserReviews,
    getAllOwnerUserReviews,
    getOneReview,
    updateReview,
    deleteOwnReview,
    deleteReview
} = require('../controllers/review.controller')

router
    .delete('/user/:reviewId', checkAuth, deleteOwnReview)
    .post('/', checkAuth, createReview)
    .get('/', checkAuth, getAllReviews)
    .get('/user', checkAuth, getAllOwnerUserReviews)
    .get('/:reviewId', checkAuth, checkAdmin, getOneReview)
    .get('/apartment/:apartmentId', checkAuth, getAllApartmentReviews)
    .get('/user/:userId', checkAuth, checkAdmin, getAllUserReviews)
    .patch('/:reviewId', checkAuth, checkAdmin, updateReview)
    .delete('/:reviewId', checkAuth, checkAdmin, deleteReview)
    
module.exports = router