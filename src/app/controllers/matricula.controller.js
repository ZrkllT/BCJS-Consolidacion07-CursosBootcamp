const db = require('./../models/index.js')
const User = db.user
const Bootcamp = db.bootcamp

exports.matricularUsuario = async (idUsuario, idCurso) =>{
    const existeUsuario = await User.findByPk(idUsuario)
    if(!existeUsuario){
        console.log(`El usuario ID: ${idUsuario} no fue encontrado`)
        return null
    }
    const existeCurso = await Bootcamp.findByPk(idCurso)
    if(!existeCurso){
        console.log(`El curso ID: ${idCurso} no fue encontrado`)
        return null
    }
    await existeCurso.addUser(existeUsuario)
    console.log(`Agregado el usuario id=${idUsuario} al bootcamp con id=${idCurso}`)
    return existeCurso
}
