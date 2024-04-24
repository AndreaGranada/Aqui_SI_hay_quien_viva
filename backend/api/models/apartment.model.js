const { DataTypes } = require ('sequelize')
const { sequelize } = require ( '../../db/index.db')

const Apartment = sequelize.define('apartment', {

    road:{
        type: DataTypes.ENUM('Calle', 'Avenida', 'Plaza'),
        allowNull: false,
    },

    roadName:{
        type: DataTypes.STRING(200),
        allowNull: false, 
    }, 

    postalCode:{
        type: DataTypes.STRING(5),
        allowNull: false, 
    },

    extraInfo: {
        type: DataTypes.STRING(200),
        allowNull: false, 
    }
})

module.exports = Apartment