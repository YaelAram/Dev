/**
 * 
 * @param { Array } items 
 * @returns { Array }
 */
const crearCombinacionesPosibles = ( items ) => 
    items.reduce( ( prev, next ) => prev.concat( prev.map( item => [ next ].concat( item ) ) ), [ [] ] );

/**
 * 
 * @param { Array } items 
 * @returns { Array }
 */
const crearCombinaciones = ( items ) => {
    return crearCombinacionesPosibles( items ).flatMap( ( combinacion ) => {
        const pesoAcumulado = combinacion.map( ( { peso } ) => peso ).reduce( ( a, b ) => a + b, 0 );
        const poderAcumulado = combinacion.map( ( { poder } ) => poder ).reduce( ( a, b ) => a + b, 0 );
        return ( pesoAcumulado < pesoMaximo && pesoAcumulado > 0 ) ? { poderAcumulado, pesoAcumulado, combinacion } : [];
    } );
};

/**
 * 
 * @param { Object } param0 
 * @param { Object } param1 
 * @returns { Object }
 */
const crearObjetoConfiguracion = ( { poderAcumulado, pesoAcumulado, combinacion }, { id, poder, peso } ) => {
    return {
        poderAcumulado: ( poderAcumulado + poder ),
        pesoAcumulado: ( pesoAcumulado + peso ),
        combinacion: [ ...combinacion, { id, poder, peso } ]
    };
};

/**
 * 
 * @param { Array } combinaciones 
 * @param { Array } items 
 * @param { number } pesoMaximo
 * @returns { Object }
 */
const analizarConfiguraciones = ( combinaciones, items, pesoMaximo ) => {
    const matrizConfiguraciones = [];
    let maximoPoder = 0;
    let configuracion = {};
    for( const { poderAcumulado, pesoAcumulado, combinacion } of combinaciones ){
        const aux = [];
        for( const { id, poder, peso } of items ) {
            if( combinacion.find( ( item ) => item.id === id ) || ( pesoAcumulado + peso ) > pesoMaximo ) aux.push( 0 );
            else {
                const nuevoPoder = poderAcumulado + poder;
                aux.push( nuevoPoder );
                if( nuevoPoder > maximoPoder ) {
                    maximoPoder = nuevoPoder
                    configuracion = crearObjetoConfiguracion( 
                        { poderAcumulado, pesoAcumulado, combinacion }, { id, poder, peso } 
                    );
                };
            }
        }
        matrizConfiguraciones.push( aux );
    }

    return { configuracion, matrizConfiguraciones };
};

/**
 * 
 * @param { Array } items 
 * @param { number } pesoMaximoBolsa 
 */
const crearConfiguracion = ( items, pesoMaximo ) => 
    analizarConfiguraciones( crearCombinaciones( items ), items, pesoMaximo );


const items = [
    { id: 1, poder: 7, peso: 2 },
    { id: 2, poder: 5, peso: 4 },
    { id: 3, poder: 2, peso: 1 },
    { id: 4, poder: 6, peso: 3 },
    { id: 5, poder: 3, peso: 7 }
];
const pesoMaximo = 9;
const { configuracion, matrizConfiguraciones } = crearConfiguracion( items, pesoMaximo );
const { poderAcumulado, pesoAcumulado, combinacion } = configuracion;

console.log( 'Matriz de configuraciones' );
console.log( matrizConfiguraciones );
console.log( `Configuracion:\nPoder Acumulado: ${ poderAcumulado }` );
console.log( `Peso Acumulado: ${ pesoAcumulado }\nItems:` );
console.log( combinacion );

/**
 * Resultado:
 * Matriz de configuraciones
 * [
 *   [ 0, 12, 9, 13, 10 ],
 *   [ 12, 0, 7, 11, 0 ],
 *   [ 0, 0, 14, 18, 0 ],
 *   [ 9, 7, 0, 8, 5 ],
 *   [ 0, 14, 0, 15, 0 ],
 *   [ 14, 0, 0, 13, 0 ],
 *   [ 0, 0, 0, 0, 0 ],
 *   [ 13, 11, 8, 0, 0 ],
 *   [ 0, 18, 15, 0, 0 ],
 *   [ 18, 0, 13, 0, 0 ],
 *   [ 15, 13, 0, 0, 0 ],
 *   [ 0, 0, 0, 0, 0 ],
 *   [ 0, 0, 0, 0, 0 ],
 *   [ 10, 0, 5, 0, 0 ],
 *   [ 0, 0, 0, 0, 0 ]
 * ]
 * Configuracion:
 * Poder Acumulado: 18
 * Peso Acumulado: 9
 * Items:
 * [
 *   { id: 2, poder: 5, peso: 4 },
 *   { id: 1, poder: 7, peso: 2 },
 *   { id: 4, poder: 6, peso: 3 }
 * ]
 */
