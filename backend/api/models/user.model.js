const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index.db')
const User = sequelize.define(
	'user',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
		},
        dni: {
			type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
			type: DataTypes.STRING,
            allowNull: false,
         
        },
        role: {
            type: DataTypes.ENUM("user", "admin"),
            allowNull: false,
		},
        
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['dni']
            },

            {
                unique: true,
                fields: ['email']
            },
            
            {
                unique: true,
                fields: ['phone']
            }
        ]
    },
   
)
module.exports = User