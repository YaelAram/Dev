const grafo = {
    'a': { 'exits': { 'b': 3, 'c': 2 } },
    'b': { 'exits': { 'a': 3, 'c': 1, 'd': 4, 'e': 2 } },
    'c': { 'exits': { 'a': 2, 'b': 1, 'd': 7, 'f': 4 } },
    'd': { 'exits': { 'b': 4, 'c': 7, 'e': 3, 'f': 1, 'g': 5 } },
    'e': { 'exits': { 'b': 2, 'd': 3, 'g': 3 } },
    'f': { 'exits': { 'c': 4, 'd': 1, 'g': 2 } },
    'g': { 'exits': { 'd': 5, 'e': 3, 'f': 2 } },
};
const nodosPorVisitar = [];
const nodoInicial = 'd';

/**
 * 
 * @param { string } nodo 
 */
const agregarNodoPorVisitar = ( nodo ) => {
    if( !nodosPorVisitar.includes( nodo ) ) nodosPorVisitar.push( nodo );
};

/**
 * 
 * @param { string } nodo 
 */
const visitarNodo = ( nodo ) => {
    const nodoActual = grafo[ nodo ];
    nodoActual[ 'visitado' ] = true;
    for( const salida in nodoActual[ 'exits' ] ){
        if( salida !== nodoInicial ){
            const siguienteNodo = grafo[ salida ];
            const costoAcumulado = nodoActual[ 'exits' ][ salida ] + nodoActual[ 'costo' ];
            if( !siguienteNodo[ 'visitado' ] ) agregarNodoPorVisitar( salida );
            if( siguienteNodo[ 'costo' ] === 0 || siguienteNodo[ 'costo' ] > costoAcumulado ){
                siguienteNodo[ 'costo' ] = costoAcumulado;
                const caminoAcumulado = ( nodo === nodoInicial ) ? nodoInicial : nodoActual[ 'camino' ];
                siguienteNodo[ 'camino' ] = caminoAcumulado.concat( `-${ salida }` );
            }
        }
    }
};

const ajustarGrafo = () => {
    for( const nodo in grafo ) {
        grafo[ nodo ][ 'visitado' ] = false;
        grafo[ nodo ][ 'camino' ] = '';
        grafo[ nodo ][ 'costo' ] = 0;
    }
};

const dijkstra = () => {
    ajustarGrafo();
    nodosPorVisitar.push( nodoInicial );
    while( nodosPorVisitar.length ){
        const nodo = nodosPorVisitar.shift();
        visitarNodo( nodo );
    }
    console.log( grafo );
};

dijkstra();
