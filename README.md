# BCJS-Consolidacion07-CursosBootcamp

## El archivo de conexión se debe modificar
el archivo de conexión en: ./src/app/config/db.config.js se debe modificar, para agregar el usuario y password que cada uno tenga configurador en su Postgres

## Yargs
Se agregó Yargs para poder realizar las acciones de forma individual

### sincronizar
comando que nos permite crear y/o actualizar la Base de Datos
### usuarios
comando para crear los Usuarios (indicados en el archivo de trabajo)
### bootcamps
comando para crear los Bootcamps (indicados en el archivo de trabajo)
### matricular
comando para hacer la asignación Usuario + Bootcamp

## Busquedas
### buscarUsuario
se puede consultar por un Usuario especifico indicando su ID
### buscarUsuarios
lista los Usuarios que existen
### actualizarUsuario
indicando el ID del usuario, se puede actualizar los datos del mismo (que se indiquen)
### eliminarUsuario
indicado el ID del usuario, se puede eliminar el registro

### buscarBootcamp
se puede consultar por un Bootcamp especifico indicando su ID, adicional lista los Usuarios "matriculados"
### buscarBootcamps
lista los Bootcamps que exitan
