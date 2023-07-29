const db = require('./app/models/index.js')
const userController = require('./app/controllers/user.controller.js')
const bootcampController = require('./app/controllers/bootcamp.controller.js')

const mainUser = async () =>{
    /* creacion usuarios */
    const usuario_1 = await userController.createUser({firstName: 'Mateo', lastName: 'Díaz', email: 'mateo.diaz@correo.com'})
    const usuario_2 = await userController.createUser({firstName: 'Santiago', lastName: 'Mejías', email: 'santiago.mejias@correo.com'})
    const usuario_3 = await userController.createUser({firstName: 'Lucas', lastName: 'Rojas', email: 'lucas.rojas@correo.com'})
    const usuario_4 = await userController.createUser({firstName: 'Facundo', lastName: 'Fernandez', email: 'facundo.fernandez@correo.com'})

    console.log( usuario_1 )
    console.log( usuario_2 )
    console.log( usuario_3 )
    console.log( usuario_4 )
}

const mainBootcamp = async () =>{
    const curso_1 = await bootcampController.createBootcamp({title: 'Introduciendo El Bootcamp De React.',cue: 10, description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'})
    const curso_2 = await bootcampController.createBootcamp({title: 'Bootcamp Desarrollo Web Full Stack.',cue: 12, description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'})
    const curso_3 = await bootcampController.createBootcamp({title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',cue: 18, description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'})

    console.log( curso_1 )
    console.log( curso_2 )
    console.log( curso_3 )
}

db.conexion.sync().then(() =>{
    //mainUser()
    //mainBootcamp()

    console.log('asd')
})




