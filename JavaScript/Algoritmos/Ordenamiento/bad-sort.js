/**
 * 
 * @param { Array } values 
 */
const bubble = ( values ) => {
    if( values.length > 1 )
        for( let i = 0 ; i<values.length ; i++ )
            for( let j = 0 ; j<( values.length - 1 ) ; j++ )
                if( values[ j ]>values[ j + 1 ] ) [ values[ j ], values[ j + 1 ] ] = [ values[ j + 1 ], values[ j ] ];
    return values;
};

/**
 * 
 * @param { Array } values 
 */
const sort = ( values ) => {
    if( values.length === 1 ) return values;
    else if ( values.length === 2 ) return bubble( values );
    else{
        const pivot = Math.floor( values.length / 2 );
        const left = sort( values.slice( 0, pivot ) );
        const right = sort( values.slice( pivot ) );
        return bubble( [ ...left, ...right ] );
    }
};

const array = [ 3, 1, 2, 6, 8, -1, 0, 5, 10, 50, 100, -100, 3, 1, 2, 6, 8, -1, 0, 5, 10, 50, 100, -100 ];
const sortedArray = sort( array );

console.log( `Array: ${ array }\nSorted Array: ${ sortedArray }` );

/**
 * Result:
 * Array: 3,1,2,6,8,-1,0,5,10,50,100,-100,3,1,2,6,8,-1,0,5,10,50,100,-100
 * Sorted Array: -100,-100,-1,-1,0,0,1,1,2,2,3,3,5,5,6,6,8,8,10,10,50,50,100,100
 */
