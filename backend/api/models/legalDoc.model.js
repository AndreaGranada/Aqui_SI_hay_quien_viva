const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index.db')
const LegalDoc = sequelize.define(
	'legalDoc',
	{
		document: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        status: {
			type: DataTypes.ENUM('aceptado','rechazado','pendiente'),
			allowNull: false,
			defaultValue: 'pendiente',
		}
		
    }
	
   
)
module.exports = LegalDoc