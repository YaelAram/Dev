/**
 * 
 * @param { Array } values 
 */
const sort = ( values ) => {
    for( let i = 0 ; i<values.length ; i++ )
        for( let j = 0 ; j<( values.length - 1 ) ; j++ )
            if( values[ j ]>values[ j + 1 ] ) [ values[ j ], values[ j + 1 ] ] = [ values[ j + 1 ], values[ j ] ];
    return values;
};

const array = [ 3, 1, 2, 6, 8, -1, 0, 5, 10, 50, 100, -100 ];
const sortedArray = sort( array );

console.log( `Array: ${ array }\nSorted Array: ${ sortedArray }` );

/**
 * Result:
 * Array: -100,-1,0,1,2,3,5,6,8,10,50,100
 * Sorted Array: -100,-1,0,1,2,3,5,6,8,10,50,100
 */
