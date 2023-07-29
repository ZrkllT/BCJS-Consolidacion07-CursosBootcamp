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

const consultasUser = async () =>{
    const consulta_1 = await userController.findUserById(1)
    //console.log(JSON.stringify(consulta_1, null,4))

    const consulta_2 = await userController.findUserAll()
    //console.log(JSON.stringify(consulta_2, null,3))

    const consulta_3 = await userController.updateUserById(3,{lastName: 'asdasd'})
    console.log(await userController.findUserById(3))
}

db.conexion.sync().then(() =>{
    //crearUser()
    //crearBootcamp()
    //crearMatricula()

    consultasUser()

    console.log('asd')
})




