const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index.db')
const District = sequelize.define(
	'district',
	{
		name: {
			type: DataTypes.STRING(90),
			allowNull: false,
		}
		
    }
   
)
module.exports = District