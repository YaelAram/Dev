/**
 * @param { Array } list 
 */
const divideList = ( list ) => {
    const pivot = Math.ceil( list.length / 2 );
    return [ list.slice( 0, pivot ), list.slice( pivot ) ];
};

/**
 * @param { Array } left
 * @param { Array } right 
 */
const merge = ( left, right ) => {
    const result = [];
    while( left.length && right.length ){
        if( left[ 0 ] < right[ 0 ] ) result.push( left.shift() );
        else result.push( right.shift() );
    }
    return [ ...result, ...left, ...right ];
};

/**
 * @param { Array } list 
 */
const mergeSort = ( list ) => {
    if( list.length <= 1 ) return list;
    let [ left, right ] = divideList( list );
    [ left, right ] = [ mergeSort( left ), mergeSort( right ) ];
    return merge( left, right );
};

const array = [ 5, 1, 3, 4, 2 ];
const sortedArray = mergeSort( array );

console.log( `Array: ${ array }\nSorted Array: ${ sortedArray }` );

/**
 * Result:
 * Array: 5,1,3,4,2
 * Sorted Array: 1,2,3,4,5
 */
