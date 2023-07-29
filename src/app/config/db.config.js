const Sequelize = require('sequelize')

const conexion = new Sequelize('db_bootcamp', 'postgres', 'pass', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres' /* a que tipo de bd nos conectamos */
})


module.exports = conexion