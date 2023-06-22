/**
 * Selection sort, similar to bubble sort method takes smaller values to the top of the array but it does that in
 * an operation per value, [ 3, 2, 1 ] takes 1 to position 0 in the first iteration, takes 2 to position 1 int the
 * second iteration and number is oredered, for cycle that orders the value stop when the value is ordered
 * @function sort
 * @param  {...any} values 
 * @returns { ...any }
 */
const sort = ( ...values ) => {
    for( let i  = 1 ; i<values.length ; i++ ){
        let aux = values[ i ];
        for( let j = ( i - 1 ) ; ( j>=0 && values[ j ]>aux ) ; j-- )
            [ values[ j + 1 ], values[ j ] ] = [ values[ j ], aux ];
    }
    return values;
}

console.log( sort( 1, 4, 6, 2, 1, 6, 9, 8, 7 ) );
