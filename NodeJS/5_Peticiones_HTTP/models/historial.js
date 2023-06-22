const fs = require( 'fs' );

class Historial{
    constructor(){
        this.historial = [];
        this.PATH = './data/data.txt';
        if( fs.existsSync( this.PATH ) ){
            try{
                this.historial = JSON.parse( fs.readFileSync( this.PATH, 'utf8' ) );
            }
            catch( error ){
                throw 'Error al leer el archivo';
            }
        }
    }

    get getHistorial() {
        return this.historial;
    }

    obtenerCiudad( ciudadID ){
        return this.historial.find( ( { id } ) => ciudadID === id )
    }

    agregarCiudad( ciudad ){
        if( this.historial.length < 5 ) this.historial.push( ciudad );
        else{
            this.historial.shift();
            this.historial.push( ciudad );
        }
    }

    guardar(){
        try{
            const db = JSON.stringify( this.historial );
            fs.writeFileSync( this.PATH, db );
            return this.PATH;
        }
        catch( error ){
            throw 'Archivo no creado';
        }
    }
};

module.exports = Historial;
