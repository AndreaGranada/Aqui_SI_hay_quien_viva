const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const apartmentRouter = require('./apartment.router')
const districtRouter = require('./district.router')
const reviewRouter = require('./review.router')
const legalDocRouter = require('./legalDoc.router')


router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/apartments', apartmentRouter)
router.use('/districts', districtRouter)
router.use('/reviews', reviewRouter)
router.use('/legalDocs', legalDocRouter)


module.exports = router
