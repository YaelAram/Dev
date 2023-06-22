/**
 * Bubble sort, smaller values goes to the top of the array each iteration
 * @function sort
 * @param  { ...any } values 
 * @returns { any[] }
 */
const sort = ( ...values ) => {
    for( let i = 0 ; i<values.length ; i++ )
        for( let j = 0 ; j<( values.length - 1 ) ; j++ )
            if( values[ j ]>values[ j + 1 ] ) [ values[ j ], values[ j + 1 ] ] = [ values[ j + 1 ], values[ j ] ];
    return values;
};

console.log( sort( 1, 4, 6, 2, 1, 6, 9, 8, 7 ) );
