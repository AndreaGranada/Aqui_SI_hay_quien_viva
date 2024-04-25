const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const{
    getAllUsers,
    getOneUser,
    getOwnUser
} = require('../controllers/user.controller')

router
    .get('/profile', checkAuth, getOwnUser)
    .get('/', checkAuth, checkAdmin, getAllUsers)
    .get('/:userId', checkAuth, checkAdmin, getOneUser)


module.exports = router
