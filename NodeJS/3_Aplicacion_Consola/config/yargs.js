const argv = require( 'yargs' )
    .option( 
        {
            'b': { 
                alias: 'base',
                type: 'number',
                demandOption: true,
                default: 1,
                describe: 'Base con la que se crea la tabla de multiplicar'
            },
            'l': {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Imprimir por consola la tabla de multiplicar generada'
            },
            'h': {
                alias: 'limite',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Limite hasta el cual es creada la tabla de multiplicar'
            }
        }
    )
    .check( ( argv, options ) => {
        if( isNaN( argv.b ) ) throw 'La base debe ser un numero';
        else if( isNaN( argv.h ) ) throw 'El limite debe ser un numero';
        return true;
    } )
    .argv;

module.exports = argv;
