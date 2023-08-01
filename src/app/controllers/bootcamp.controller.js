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

/* addUser */
/* se agregó en el controlador de matricula y se llama "matricularUsuario" */

/* buscar Bootcamp */
exports.findById = async (idBootcamp) =>{
    const BootcampBuscado = await Bootcamp.findByPk(idBootcamp)
    if(!BootcampBuscado){
        console.log(`El Bootcamp ID: ${idBootcamp} no fue encontrado`)
    }

    const BootcampUsuario = await Bootcamp.findByPk(idBootcamp, {
        attributes: ['title','cue','description'],
        //attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: User,
            as: 'users',
            attributes: ['firstName','lastName'],
            through:{
                attributes: ['user_id','bootcamp_id']
            }
        }]
    })
    return BootcampUsuario
}

/* buscar todos los Bootcamp + Usuarios */
exports.findAll = async () =>{
    const BootcampBuscado = await Bootcamp.findAll()
    if(!BootcampBuscado){
        console.log(`El Bootcamp ID: ${idBootcamp} no fue encontrado`)
    }

    const BootcampUsuario = await Bootcamp.findAll({
        attributes: ['title','cue','description'],
        //attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: User,
            as: 'users',
            attributes: ['firstName','lastName'],
            through:{
                attributes: ['user_id','bootcamp_id']
            }
        }]
    })
    return BootcampUsuario
}

/*
• Crear y guardar un nuevo Bootcamp llamado createBootcamp.
• Agregar un Usuario al Bootcamp llamado addUser.
• Obtener los Bootcamp por id llamado findById.
• Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.
*/