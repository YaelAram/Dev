const inquirer = require( 'inquirer' );
require( 'colors' );

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Selecciona una opcion:',
        choices: [
            {
                value: '1',
                name: `${ '1.'.yellow } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.yellow } Mostrar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.yellow } Mostrar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.yellow } Mostrar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.yellow } Cambiar estado`
            },
            {
                value: '6',
                name: `${ '6.'.yellow } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.yellow } Guardar y salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log( `=======================================`.green );
    console.log( `       Selecciona una opción: `.yellow );
    console.log( `=======================================`.green );
    const { opcion } = await inquirer.prompt( preguntas );
    return opcion;
};

const pausar = async () => {
    const mensajePausar = [
        {
            type: 'input',
            name: 'continuar',
            message: `\nPresiona ${ 'CUALQUIER TECLA'.yellow } para continuar`
        }
    ];

    const { continuar } = await inquirer.prompt( mensajePausar );
    return continuar
};

const obtenerDatos = async ( message ) => {

    const mensajeDescripcion = [
        {
            type: 'input',
            name: 'datos',
            message,
            validate( value ){
                if( value.length === 0 ) return 'Por favor ingrese un valor';
                return true;
            }
        }
    ];

    const { datos } = await inquirer.prompt( mensajeDescripcion );
    return datos;
};

const listaTareas = async ( message, choices ) => {
    const lista = [
        {
            type: 'list',
            name: 'itemID',
            message,
            choices
        }
    ];
    const { itemID } = await inquirer.prompt( lista );
    return itemID;
};

const modificarEstado = async ( choices ) => {
    const lista = [{
        type: 'checkbox', 
        message: 'Selecciona las tareas a modificar: ',
        name: 'estados',
        choices
    }];

    const { estados } = await inquirer.prompt( lista );
    return estados;
};

const confirmarBorrar = async ( id, tareas ) => {
    const confirmar = [
        {
            type: 'confirm',
            name: 'deleteItem',
            message: `¿Deseas eliminar la tarea "${ tareas.lista[ id ].getDescripcion }"?`,
            default: false
        }
    ];

    const { deleteItem } = await inquirer.prompt( confirmar );
    return deleteItem;
}

module.exports = {
    inquirerMenu,
    pausar,
    obtenerDatos,
    listaTareas,
    confirmarBorrar,
    modificarEstado
};
