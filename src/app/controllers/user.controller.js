const db = require('./../models/index.js')
const User = db.user
const Bootcamp = db.bootcamp

/* createUser */
exports.createUser = async (usuario) =>{
    try{
        const registroUsuario = await User.create(usuario)
        return registroUsuario
    }catch(err){
        console.log('error al crear usuario:', err)
        return null
    }
}

/* findUserID */
exports.findUserById = async (idUsuario) =>{
    const usuarioBuscado = await User.findByPk(idUsuario)
    if(!usuarioBuscado){
        console.log(`El Usuario ${usuarioBuscado} no encontrado`)
        return null
    }

    const usuarioBootcamp = await User.findByPk(idUsuario,{
        attributes: ['firstName','lastName','email'],
        include: [{
            model: Bootcamp,
            as: 'bootcamps',
            attributes: ['title'],
            through:{
                attributes: ['user_id','bootcamp_id']
            }
        }]
    })
    return usuarioBootcamp
}

/* findAll */
exports.findUserAll = async () =>{
    const usuarioBootcamp = await User.findAll({
        attributes: ['firstName','lastName'],
        include: [{
            model: Bootcamp,
            as: 'bootcamps',
            attributes: ['title'],
            through:{
                attributes: []//['user_id','bootcamp_id']
            }
        }]
    })
    return usuarioBootcamp
}

/* updateUserById */
exports.updateUserById = async (idUsuario,updUsuario) =>{
    const usuarioBuscado = await User.findByPk(idUsuario)
    if(!usuarioBuscado){
        console.log(`El Usuario ${usuarioBuscado} no encontrado`)
        return null
    }
    await User.update(updUsuario,{where: {id: idUsuario}})
}

/* deleteUserById */
exports.deleteUserById = async (idUsuario) =>{
    const usuarioBuscado = await User.findByPk(idUsuario)
    if(!usuarioBuscado){
        console.log(`El Usuario ${usuarioBuscado} no encontrado`)
        return null
    }
    await usuarioBuscado.destroy()
}

/*
• Crear y guardar usuarios llamado createUser.
• Obtener los Bootcamp de un usuario llamado findUserById.
• Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
• Actualizar usuario por Id llamado updateUserById.
• Eliminar un usuario por Id llamado deleteUserById.
*/