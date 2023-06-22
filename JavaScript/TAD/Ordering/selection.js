/**
 * Selection sort, similar to bubble sort method takes smaller values to the top of the array but it searches the
 * smallest value of the array and swap it with the current position, for example, in the first iteration searches
 * the smallest value and then swap it to the first position [3, 2, 1] here number 1 will change to position 0 and
 * number 3 to position 2
 * @function sort
 * @param  {...any} values 
 * @returns { ...any }
 */
const sort = ( ...values ) => {
    for( let i  = 0 ; i<values.length ; i++ ){
        let minIndex = i;
        for( let j = ( i + 1 ) ; j<values.length ; j++ ) if( values[ j ]<values[ minIndex ] ) minIndex = j;
        [ values[ i ], values[ minIndex ] ] = [ values[ minIndex ], values[ i ] ];
    }
    return values;
}

console.log( sort( 1, 4, 6, 2, 1, 6, 9, 8, 7 ) );
