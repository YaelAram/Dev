/**
 * 
 * @param { number } objeto 
 * @returns { Object }
 */
const crearBolsa = ( objeto ) => ( { peso: objeto, objetos: [ objeto ] } );

/**
 * 
 * @param { Object } param0 
 * @param { number } objeto 
 * @returns { Object }
 */
const agregarObjeto = ( { peso, objetos }, objeto ) => ( { peso: ( peso + objeto ), objetos: [ ...objetos, objeto ] } );

/**
 * 
 * @param { Array } objetos 
 * @param { number } pesoMaximoBolsa
 */
const crearBolsas = ( objetos, pesoMaximoBolsa ) => {
    const objetosOrdenados = objetos.sort( ( a, b ) => b - a );
    const bolsas = [ crearBolsa( objetosOrdenados.shift() ) ];
    let crearNuevaBolsa = true;

    for( const objeto of objetosOrdenados ) {
        for( let i = 0 ; i<bolsas.length ; i++ ) {
            if( ( bolsas[ i ].peso + objeto ) <= pesoMaximoBolsa ) {
                bolsas[ i ] = agregarObjeto( bolsas[ i ], objeto );
                crearNuevaBolsa = false;
                break;
            }
        }
        if( crearNuevaBolsa ) bolsas.push( crearBolsa( objeto ) );
        crearNuevaBolsa = true;
    }

    return bolsas;
};

const objetos = [ 7, 2, 1, 4, 2, 3, 8, 9, 1, 3, 7, 4, 2, 6, 5, 1 ];
const pesoMaximoBolsa = 9;
const bolsas = crearBolsas( objetos, pesoMaximoBolsa );

console.log( `Bolsas: ${ JSON.stringify( bolsas ) }` );

/**
 * Resultado:
 * Bolsas: [{"peso":9,"objetos":[9]},{"peso":9,"objetos":[8,1]},{"peso":9,"objetos":[7,2]},{"peso":9,"objetos":[7,2]},
 * {"peso":9,"objetos":[6,3]},{"peso":9,"objetos":[5,4]},{"peso":9,"objetos":[4,3,2]},{"peso":2,"objetos":[1,1]}]
 */
