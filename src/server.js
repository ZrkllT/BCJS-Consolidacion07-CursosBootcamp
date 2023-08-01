const yargs = require('yargs')

const db = require('./app/models/index.js')
const userController = require('./app/controllers/user.controller.js')
const bootcampController = require('./app/controllers/bootcamp.controller.js')
const matriculaController = require('./app/controllers/matricula.controller.js')

const crearUser = async () =>{
    /* creacion usuarios */
    const usuario_1 = await userController.createUser({firstName: 'Mateo', lastName: 'Díaz', email: 'mateo.diaz@correo.com'})
    const usuario_2 = await userController.createUser({firstName: 'Santiago', lastName: 'Mejías', email: 'santiago.mejias@correo.com'})
    const usuario_3 = await userController.createUser({firstName: 'Lucas', lastName: 'Rojas', email: 'lucas.rojas@correo.com'})
    const usuario_4 = await userController.createUser({firstName: 'Facundo', lastName: 'Fernandez', email: 'facundo.fernandez@correo.com'})
}

const crearBootcamp = async () =>{
    const curso_1 = await bootcampController.createBootcamp({title: 'Introduciendo El Bootcamp De React.',cue: 10, description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'})
    const curso_2 = await bootcampController.createBootcamp({title: 'Bootcamp Desarrollo Web Full Stack.',cue: 12, description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'})
    const curso_3 = await bootcampController.createBootcamp({title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',cue: 18, description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'})
}

const crearMatricula = async () =>{
    const matricula_1 = await matriculaController.matricularUsuario(1,1)
    const matricula_2 = await matriculaController.matricularUsuario(2,1)
    const matricula_3 = await matriculaController.matricularUsuario(1,2)
    const matricula_4 = await matriculaController.matricularUsuario(1,3)
    const matricula_5 = await matriculaController.matricularUsuario(2,3)
    const matricula_6 = await matriculaController.matricularUsuario(4,3)
}

/* consultas */
const consultarUserId = async (idUsuario) =>{
    const resultado = await userController.findUserById(idUsuario)
    console.log(JSON.stringify(resultado,null,3))
}
const consultarUsers = async () =>{
    const resultado = await userController.findUserAll()
    console.log(JSON.stringify(resultado,null,3))
}
const updUser = async (idUsuario,DatosUpd) =>{
    const resultado = await userController.updateUserById(idUsuario,DatosUpd)
    const resUpd = await userController.findUserById(idUsuario)
    console.log(JSON.stringify(resUpd,null,3))
}
const delUser = async (idUsuario) =>{
    const resultado = await userController.deleteUserById(idUsuario)
    const resDel = await userController.findUserAll()
    console.log(JSON.stringify(resDel,null,3))
}

const consultarBootcampId = async (idBootcamp) =>{
    const resultado = await bootcampController.findById(idBootcamp)
    console.log(JSON.stringify(resultado, null,3))
}
const consultarBootcamps = async () =>{
    const resultado = await bootcampController.findAll()
    console.log(JSON.stringify(resultado, null,3))
}

const consultasBootcamp = async () =>{
    //const consultaUno = await bootcampController.findById(1)
    //console.log(JSON.stringify(consultaUno, null,3))

    //const consultaDos = await bootcampController.findAll()
    //console.log(JSON.stringify(consultaDos, null,3))
}

yargs
.command('sincronizar','Nos permite sincronizar la base de datos (crear y/o actualizar)',{},
    () =>{
        db.conexion.sync().then(() =>{ console.log('Base de Datos Sincronizada') })
    })
.command('usuarios','Crea los Usuarios del PDF',{},
    () =>{ crearUser() })
.command('bootcamps','Crea los Bootcamps / Cursos del PDF',{},
    () =>{ crearBootcamp() })
.command('matricular','Crea la asociación Usuario + Bootcamp del PDF',{},
    () =>{ crearMatricula() })
.command('buscarUsuario','Busca un Usuario por ID',
    {
        id:{
            alias: 'i',
            describe: 'El ID del usuario a Buscar',
            type: 'number',
            demandedOptions: true
        }
    },({id}) =>{ consultarUserId(id) })
.command('buscarUsuarios','Busca todos los Usuarios',{},
    () =>{ consultarUsers() })
.command('actualizarUsuario','Entregando el ID del usuario, nos permite actualizar',
    {
        id:{
            alias: 'i',
            describe: 'El ID del usuario a Buscar',
            type: 'number',
            demandedOptions: true
        },
        firstName:{
            alias: 'n',
            describe: 'Nuevo Nombre del Usuario',
            type: 'string',
            demandedOptions: false
        },
        lastName:{
            alias: 'a',
            describe: 'Nuevo Apellido del Usuario',
            type: 'string',
            demandedOptions: false
        },
        email:{
            alias: 'c',
            describe: 'Nuevo Correo del Usuario',
            type: 'string',
            demandedOptions: false
        }
    },
    ({id,firstName,lastName,email}) =>{
        let objUpd ={
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        updUser(id,objUpd)
    })
.command('eliminarUsuario','Entregando el ID del usuario, nos permite eliminarlo',
    {
        id:{
            alias: 'i',
            describe: 'El ID del usuario a Buscar',
            type: 'number',
            demandedOptions: true
        }
    },({id}) =>{ delUser(id) })

.command('buscarBootcamp','Busca un Bootcamp por ID',
    {
        id:{
            alias: 'i',
            describe: 'El ID del Bootcamp a Buscar',
            type: 'number',
            demandedOptions: true
        }
    },({id}) =>{ consultarBootcampId(id) })
.command('buscarBootcamps','Busca todos los Bootcamps',{},
    () =>{ consultarBootcamps() })


.help().argv