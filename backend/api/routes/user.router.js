const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const{
    getAllUsers,
    getOneUser,
    getOwnUser,
    updateOwnUser, 
    createUser,
} = require('../controllers/user.controller')

router
    .patch('/profile', checkAuth, updateOwnUser)
    .get('/profile', checkAuth, getOwnUser)
    .get('/', checkAuth, checkAdmin, getAllUsers)
    .get('/:userId', checkAuth, checkAdmin, getOneUser)
    .post('/', checkAuth,checkAdmin,createUser)


module.exports = router
