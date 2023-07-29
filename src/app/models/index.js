const conexion = require('./app/config/conexion.config.js')

const db = {
    conexion: conexion,
    user: require('./user.model.js'),
    bootcamp: require('./bootcamp.model.js')
}

db.users.belongsToMany(db.bootcamps,{
    through: 'user_bootcamp',
    as: 'bootcamps',
    foreignKey: 'user_id'
})

db.bootcamps.belongsToMany(db.users,{
    through: 'user_bootcamp',
    as: 'users',
    foreignKey: 'bootcamp_id'
})

module.exports = db
