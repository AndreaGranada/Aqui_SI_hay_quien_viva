const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user.model')

const checkAuth = async (req, res, next) => {
  if ( !req.headers.authorization) {
    return res.status(401).send('Token not found')
  }

  jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, result) => {
    if (err) {
      console.log(err)
      return res.status(401).send('Token not valid miau')
    }

    const user = await User.findOne({
      where: {
        email: result.email
      }
    })
    
    if (!user) {
      return res.status(404).send('User not found middle')
    }

    res.locals.user = user
    next()
  })
}

const checkAdmin = (req, res, next) => {
  if ( res.locals.user.role !== 'admin') {
    return res.status(401).send('User not authorized MIAU')
  }
  next()
}

module.exports = {
  checkAuth,
  checkAdmin
}