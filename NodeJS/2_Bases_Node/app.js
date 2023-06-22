const { crearArchivoIntArray, crearArchivoString, crearArchivoSync } = require( './helpers/producto' );

crearArchivoIntArray( 5 );
crearArchivoString( 6 );
crearArchivoSync( 7 ).
    then( nombreArchivo => console.log( `${ nombreArchivo } creado` ) )
    .catch( console.log );
