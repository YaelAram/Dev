import { toDecimalFraction } from './decimal-conversor.js';

export const procesarMatista = ( exponente = 0, matista = '' ) => {
    let parteEntera  = "",
        parteDecimal = "";

    if( exponente >= matista.length ) parteEntera = '1'.concat( matista ).concat( '0'.repeat( exponente - 23 ) );
    else if( exponente > 0 && exponente < matista.length ){
        parteEntera = '1'.concat( matista.slice( 0, exponente ) );
        parteDecimal = matista.slice( exponente );
    }
    else if( exponente === 0 ){
        parteEntera = '1';
        parteDecimal = matista;
    }
    else parteDecimal = '0'.repeat( Math.abs( exponente + 1 ) ).concat( '1' ).concat( matista );

    return [ parteEntera, parteDecimal ]
};

export const obtenerResultado = ( parteEntera = '', parteDecimal = '', signo = '' ) => {
    let resultado = ( ( parteEntera ) ? parseInt( parteEntera, 2 ) : 0.0 ) + ( ( parteDecimal ) ? toDecimalFraction( parteDecimal ) : 0.0 );
    
    if( signo === '1' ) resultado *= -1;

    return resultado;
};

export const numeroEspecialMayor = ( signo = '', matista = '' ) => {
    if( matista === '00000000000000000000000' ) return ( ( signo === '0' ) ? 'infinity' : '-infinity' );
    else return 'Numero no definido';
}

export const numeroEspecialMenor = ( signo = '', matista = '' ) => {
    if( matista === '00000000000000000000000' ) return ( ( signo === '0' ) ? '0' : '-0' );
    else if( matista === '00000000000000000000001' ) return ( ( signo === '0' ) ? '1.4012984643e−45' : '-1.4012984643e−45' );
    else if( matista === '11111111111111111111111' ) return ( ( signo === '0' ) ? '1.1754942107e−38' : '-1.1754942107e−38' );
    else return 'Numero no definido';
}
