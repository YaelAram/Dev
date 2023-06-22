const fs = require( 'fs' );

const crearArchivoSync = async ( base, limite, listar ) => {
    let salida = '';
    const nombreArchivo = `./out/tabla_${ base }.txt`;

    for( let i = 1 ; i<= limite ; i++ ) salida += `${ base } * ${ i } = ${ base * i }\n`;

    if( listar ) console.log( salida );

    try{
        fs.writeFileSync( nombreArchivo, salida ); 
        return nombreArchivo;
    }
    catch( error ){
        throw 'Archivo no creado';
    }
};

module.exports = {
    crearArchivoSync
}
