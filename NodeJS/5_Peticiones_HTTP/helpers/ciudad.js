const crearListaInquirerChoices = ( ciudades ) => {
    const choices = [];
    ciudades.forEach( ( { id, place_name }, index) => {
        const choice = {
            value: id, 
            name: `${ index + 1 }. ${ place_name }`
        }
        choices.push( choice );
    });
    return choices
};

const mostrarInformacion = ( { place_name, longitud, latitud, temp, temp_min, temp_max } ) => {
    console.log( '\nInformacion de la ciudad:\n'.green );
    console.log( `${ 'Ciudad: '.yellow } ${ place_name }` );
    console.log( `${ 'Longitud: '.yellow } ${ longitud }` );
    console.log( `${ 'Latitud: '.yellow } ${ latitud }` );
    console.log( `${ 'Temperatura: '.yellow } ${ temp } Celcius` );
    console.log( `${ 'Temperatura minima: '.yellow } ${ temp_min } Celcius` );
    console.log( `${ 'Temperatura maxima: '.yellow } ${ temp_max } Celcius` );
};

module.exports = {
    crearListaInquirerChoices,
    mostrarInformacion
};
