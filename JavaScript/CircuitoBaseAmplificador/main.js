/**
 * 
 * @param { string } ganancia 
 * @returns 
 */
const obtenerGanancia = ( ganancia ) => {
    let gananciaDB = 0.0, gananciaAdim = 0.0;
    if( ganancia.toLowerCase().endsWith( 'db' ) ){
        gananciaDB = Number( ganancia.slice( 0, ganancia.length - 2 ) );
        gananciaAdim = Math.pow( 10.0, gananciaDB / 20.0 );
    }
    else{
        gananciaAdim = Number( ganancia );
        gananciaDB = 20.0 * Math.log10( gananciaAdim );
    }
    return { gananciaAdim, gananciaDB };
};

const anchoBanda = 100E6,
      formato = new Intl.NumberFormat( 'es-MX', { notation: 'engineering' } );
let { gananciaAdim, gananciaDB } = obtenerGanancia( '60db' ),
    aux = gananciaDB,
    frecuenciaPolo = anchoBanda,
    resistencia = 3.3E3;

while( aux >= 20 ){
    frecuenciaPolo /= 10.0;
    aux -= 20.0;
}

const capacitancia = 1 / (2.0 * Math.PI * frecuenciaPolo * resistencia);

console.log( `Ganancia (Adimensional): ${ formato.format( gananciaAdim ) }
Ganancia (dB): ${ gananciaDB }
Ancho de Banda (Hz): ${ formato.format( anchoBanda ) }
Frecuencia Polo (Hz): ${ formato.format( frecuenciaPolo ) }
Resistencia (Ω): ${ formato.format( resistencia ) }
Capacitancia (F): ${ formato.format( capacitancia ) }` );
