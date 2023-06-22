const fs = require( 'fs' ),
    { Buffer} = require( 'buffer' );

const crearArchivoIntArray = ( base = 1 ) => {
    let salida = '';

    for( let i = 1 ; i<= 10 ; i++ ) salida += `${ base } * ${ i } = ${ base * i }\n`;

    const data = new Uint8Array( Buffer.from( salida ) );

    fs.writeFile( `tabla_${ base }.txt`, data, ( error ) => {
        if( error ) throw error;
        console.log( 'Archivo creado' );
    } );
};

const crearArchivoString = ( base = 1 ) => {
    let salida = '';

    for( let i = 1 ; i<= 10 ; i++ ) salida += `${ base } * ${ i } = ${ base * i }\n`;

    fs.writeFile( `tabla_${ base }.txt`, salida, ( error ) => {
        if( error ) throw error;
        console.log( 'Archivo creado' );
    } );
};

const crearArchivoSync = async ( base = 1 ) => {
    let salida = '';
    const nombreArchivo = `tabla_${ base }.txt`;

    for( let i = 1 ; i<= 10 ; i++ ) salida += `${ base } * ${ i } = ${ base * i }\n`;

    try{
        fs.writeFileSync( nombreArchivo, salida ); 
        return nombreArchivo;
    }
    catch( error ){
        throw 'Archivo no creado';
    }

};

module.exports = {
    crearArchivoIntArray,
    crearArchivoString,
    crearArchivoSync
}
