const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {

  try {

    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS))
    req.body.password = bcrypt.hashSync(req.body.password, salt)

    const user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        dni: req.body.dni,
        phone: req.body.phone,
    })

    const payload = { email: req.body.email }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '100h' })
    return res.status(200).json({ token: token })
  } catch (error) {
    console.log('Error signing up user')
    return res.status(500).json(error)
  }
}

const login = async (req, res) => {
  try {

    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.status(404).send('Email or password wrong')
    }

    const checkPass = bcrypt.compareSync(req.body.password, user.password)

    if (checkPass) {
      const payload = { email: req.body.email }
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '100h' })
      return res.status(200).json({ token: token }, "Loging succesfully")  
    } else {
      return res.status(404).send('Email or password wrong')
    }

  } catch (error) {
    console.log('Error login in:', error)
    return res.status(500).json(error)
  }
}



module.exports = {
  signup,
  login
} 