const { inquirerMenu, pausar, obtenerDatos, listaTareas, confirmarBorrar, modificarEstado } = require( './helpers/inquirer' );
const Tareas = require('./models/tareas');
const { crearArchivoSync } = require( './helpers/db-manager' );
require( 'colors' );

console.clear();

const main = async () => {
    let opt = '1';
    const tareas = new Tareas();
    while( opt !== '0' ){
        opt = await inquirerMenu();

        switch( opt ){
            case '1':
                const descipcion = await obtenerDatos( 'Ingresa la descripcion:' );
                tareas.crearTarea( descipcion );
                break;

            case '2':
                if( tareas.vacio() ) console.log( `${ '?'.green } Lista vacia` );
                else await listaTareas( 'Lista de tareas:', tareas.getInquirerChoices( false ) );
                break;

            case '3':
                const completadas = tareas.getInquirerChoicesCompletadas();
                if( tareas.vacio() || completadas.length === 0 ) console.log( `${ '?'.green } Lista vacia` );
                else await listaTareas( 'Tarea(s) completada(s):', completadas );
                break;

            case '4':
                const pendientes = tareas.getInquirerChoicesPendientes();
                if( tareas.vacio() || pendientes.length === 0 ) console.log( `${ '?'.green } Lista vacia` );
                else await listaTareas( 'Tarea(s) pendiente(s):', pendientes );
                break;

            case '5':
                if( tareas.vacio() ) console.log( `${ '?'.green } Lista vacia` );
                else{
                    const estados = await modificarEstado( tareas.getInquirerChoices( true ) );
                    tareas.completar( ...estados );
                }
                break;

            case '6':
                if( tareas.vacio() ) console.log( `${ '?'.green } Lista vacia` );
                else{
                    const id = await listaTareas( '¿Que tarea deseas eliminar?', tareas.getInquirerChoices( false ) );
                    const confirmacion = await confirmarBorrar( id, tareas );
                    if( confirmacion ) tareas.borrarTarea( id );
                }
                break;
        }

        if( opt !== '0' ) await pausar();
        else{
            try{
                const db = JSON.stringify( tareas.lista );
                crearArchivoSync( db );
            }
            catch( error ){
                console.log( error );
            }
        }
    }
};

main();
