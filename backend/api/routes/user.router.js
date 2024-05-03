const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/index.middleware')

const{
    getAllUsers,
    getOneUser,
    getOwnUser,
    updateOwnUser, 
    deleteOwnProfile,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller')

router
  .post("/", checkAuth, checkAdmin, createUser)
  .patch("/profile", checkAuth, updateOwnUser)
  .get("/profile", checkAuth, getOwnUser)
  .delete("/profile", checkAuth, deleteOwnProfile)
  .get("/", checkAuth, checkAdmin, getAllUsers)
  .get("/:userId", checkAuth, checkAdmin, getOneUser)
  .patch("/:userId", checkAuth, checkAdmin, updateUser)
  .delete("/:userId", checkAuth, checkAdmin, deleteUser);


module.exports = router
