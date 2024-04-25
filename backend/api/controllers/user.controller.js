const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//GetAllUsers (admin)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll( {
            attributes: {
                exclude: 'password'
            }
        })
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
    return res.status(500).json({message: "Something went wrong"})
    }
}

// Get One User (admin)
async function getOneUser(req, res) {
	try {
		const user = await User.findByPk(req.params.userId)
		if (user) {
			return res.status(200).json(user)
		} else {
			return res.status(404).send('User not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get Own Profile - User
const getOwnUser = async (req,res) => {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            attributes: {
                exclude: 'password'
            }
           
        })
        console.log(user)
        if(user){
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found cont')
        }

    } catch (error) {
        console.log(error)
      return res.status(500).json({message: "Something went wrong"})
    }
}

// Update Own Profile - User


async function updateOwnUser(req, res) {
	try {
        const user = await User.findByPk(res.locals.user.id, {
            attributes: {
                exclude: 'password' 
            }
        });

		if (!user) {
			return res.status(404).send('User not found');
 		}

 		const updatedUser = await user.update(req.body);

 		return res.status(200).json({ message: 'User updated', user: updatedUser });
 	} catch (error) {

         return res.status(500).send(error.message);
 	}
 }


module.exports = {
    getAllUsers,
    getOneUser,
    getOwnUser
}