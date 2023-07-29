const conextion = require('./../app/config/db.config.js')
const { DataTypes } = require('sequelize')


const User = conexion.define('users',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true /* validar correo */
        }
    }
})

module.exports = User

/*
firstName: cadena de caracteres y campo obligatorio.
• lastName: cadena de caracteres y campo obligatorio.
• email: campo obligatorio, y con las siguientes validaciones: formato de correo y que sea
único, no repetitivo en la base de datos
*/