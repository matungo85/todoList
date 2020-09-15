const acciones = require('./funcionesDeTareas.js/index.js');

const accionDelUsuario = process.argv[2];


switch (accionDelUsuario) {
    case 'listar':
        console.log('El usuario eligió listar \n');
        acciones.listar();
    break;
    
    case 'agregar':
        console.log('El usuario eligió agregar');
        acciones.agregar(process.argv[3]);
     
    break;

    case 'borrar':
        console.log('El usuario eligió borrar \n');
        acciones.borrar(process.argv[3]);
        
    break;

    case undefined:
        console.log('El usuario no eligió nada. Opciones: listar o agregar');

    break;

    default:
        console.log('El usuario eligió una opción incorrecta')
    
    break;
}


