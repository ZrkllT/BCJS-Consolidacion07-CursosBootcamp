const conexion = require('./../config/db.config.js')
const Sequelize = require('sequelize')


const Bootcamp = conexion.define('bootcamps',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cue: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 5,
            max: 10
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Bootcamp

/*
• title: cadena de caracteres que define el título del Bootcamp, campo obligatorio.
• cue: número que define la cantidad de sesiones (CUE) que contiene el Bootcamp, campo
obligatorio con las siguientes validaciones: tipo entero con un valor mínimo de 5 CUE y
como máximo 10.
• description: cadena de caracteres que define la descripción o el objetivo del Bootcamp,
campo obligatorio.
*/