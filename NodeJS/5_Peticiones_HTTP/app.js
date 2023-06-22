require( 'dotenv' ).config();

const { inquirerMenu, pausar, obtenerDatos, listarCiudades } = require( './helpers/inquirer' );
const Provider = require( './models/provider' );
const { crearListaInquirerChoices, mostrarInformacion } = require( './helpers/ciudad' );
const Historial = require( './models/historial' );

const main = async () => {
    let opt = 1;
    const provider = new Provider();
    const historial = new Historial();
    while( opt !== 3 ){
        opt = await inquirerMenu();
        switch( opt ){
            case 1:
                const lugar = await obtenerDatos( '¿Que lugar deseas buscar?' );
                const ciudades = await provider.buscarCiudad( lugar );
                const choices = crearListaInquirerChoices( ciudades );
                const id = await listarCiudades( 'Selecciona una ciudad:', choices );
                const { place_name, longitud, latitud } = ciudades.find( ( { id: ciudadID } ) => ciudadID == id );
                const { temp, temp_min, temp_max } = await provider.obtenerClima( longitud, latitud );
                historial.agregarCiudad( { id, place_name, longitud, latitud, temp, temp_min, temp_max } );
                mostrarInformacion( { place_name, longitud, latitud, temp, temp_min, temp_max } );
                break;
            case 2:
                const ciudadID = await listarCiudades( 
                    'Historial de ciudades:', 
                    crearListaInquirerChoices( historial.getHistorial )
                    );
                const ciudad = historial.obtenerCiudad( ciudadID );
                mostrarInformacion( ciudad );
                break;
        }
        console.log();
        if( opt !== 3 ) await pausar();
        else historial.guardar();
    }
};

main();
