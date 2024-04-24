const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index.db')
const District = sequelize.define(
	'district',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		}
		
    }
   
)
module.exports = District