const { crearArchivoSync } = require( './helpers/producto' ),
      argv = require( './config/yargs' );
      
console.clear();

crearArchivoSync( argv.b, argv.h, argv.l )
            .then( console.log )
            .catch( console.log );
