const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index.db')
const User = sequelize.define(
	'user',
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		surname: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(90),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
		},
        dni: {
			type: DataTypes.STRING(90),
            allowNull: false,
        },
        phone: {
			type: DataTypes.STRING(90),
            allowNull: false,
         
        },
        role: {
            type: DataTypes.ENUM("user", "admin"),
            allowNull: false,
            defaultValue: 'user',
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