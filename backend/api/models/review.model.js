const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index.db')
const Review = sequelize.define(
	'review',
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        media: {
            type: DataTypes.TEXT,
        },
        datePost: {
            type: DataTypes.DATE,
            allowNull: false,
		},
        postedStatus: {
			type: DataTypes.ENUM('yes','no'),
            allowNull: false,
            defaultValue: 'no'
        },
    },
 
)
module.exports = Review