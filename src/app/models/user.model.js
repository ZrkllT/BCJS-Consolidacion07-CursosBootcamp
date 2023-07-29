const conexion = require('./../config/db.config.js')
const Sequelize = require('sequelize')


const User = conexion.define('users',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
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