const db = require('./../models/index.js')
const User = db.user
const Bootcamp = db.bootcamp

/* createBootcamp */
exports.createBootcamp = async (curso) =>{
    try{
        const registroCurso = await Bootcamp.create(curso)
        return registroCurso
    }catch(err){
        console.log('error al crear curso:', err)
        return null
    }
}
/*
Crear y guardar un nuevo Bootcamp llamado createBootcamp.
• Agregar un Usuario al Bootcamp llamado addUser.
• Obtener los Bootcamp por id llamado findById.
• Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.
*/