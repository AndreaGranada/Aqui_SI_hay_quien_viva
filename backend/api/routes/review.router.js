const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')


const {
    createReview,
    getAllReviews,
    getAllApartmentReviews,
    getAllUserReviews,
    getAllOwnerUserReviews,
    getOneReview,
    updateReview,
    deleteOwnReview,
    deleteReview,
    getTwoRecentApartmentReviews,
    getSixApartmentsWithReviews,
    getAllApartmentsWithReviews
} = require('../controllers/review.controller')

router
  .delete("/user/:reviewId", checkAuth, deleteOwnReview)
  .get("/sixApartments", getSixApartmentsWithReviews)
  .get("/apartments", getAllApartmentsWithReviews)
  .post("/", checkAuth, createReview)
  .get("/", checkAuth, getAllReviews)
  .get("/user", checkAuth, getAllOwnerUserReviews)
  .get("/:reviewId", checkAuth, checkAdmin, getOneReview)
  .get("/apartment/:apartmentId", getAllApartmentReviews)
  .get("/user/:userId", checkAuth, checkAdmin, getAllUserReviews)
  .patch("/:reviewId", checkAuth, checkAdmin, updateReview)
  .delete("/:reviewId", checkAuth, checkAdmin, deleteReview)
  .get("/twoReview/:apartmentId", getTwoRecentApartmentReviews);


module.exports = router