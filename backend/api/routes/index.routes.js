const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const apartmentRouter = require('./apartment.router')
const districtRouter = require('./district.router')


router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/apartments', apartmentRouter)
router.use('/districts', districtRouter)


module.exports = router
