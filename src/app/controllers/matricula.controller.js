const db = require('./../models/index.js')
const User = db.user
const Bootcamp = db.bootcamp

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