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

/*
exports.agregarParticipante = async (idCurso, idParticipante) => {
    const curso = await Curso.findByPk(idCurso)
    if(!curso) { // Validación para verificar existencia del curso
        console.log("Curso no encontrado "+idCurso);
        return null
    }
    const participante = await Participante.findByPk(idParticipante)
    if(!participante) { //Validación para verificar la existencia del participante
        console.log("Participante no encontrado "+idParticipante);
        return null
    }
    await curso.addParticipante(participante)
    console.log(`Participante ${idParticipante} agregado al curso ${idCurso}`);
    return curso;
}
*/