const db = require('./app/models/index.js')

db.conexion.sync().then(() =>{
    console.log('asd')
})