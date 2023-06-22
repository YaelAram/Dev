const fs = require( 'fs' );

const PATH = './data/data.txt';

const crearArchivoSync = ( db ) => {
    try{
        fs.writeFileSync( PATH, db ); 
        return PATH;
    }
    catch( error ){
        throw 'Archivo no creado';
    }
};

const leerArchivoSync = () => {
    try{
        const db = fs.readFileSync( PATH, 'utf8' );
        return db;
    }
    catch( error ){
        throw 'Error al leer el archivo';
    }
};

module.exports = {
    crearArchivoSync,
    leerArchivoSync
};
