/**
 * 
 * @param { Array } list
 * @param { number } pivot
 */
const divideList = ( list, pivot ) => {
    const menores = [], mayores = [];
    for( const element of list ) {
        if( element < pivot ) menores.push( element );
        else mayores.push( element );
    }
    return [ menores, mayores ];
}

/**
 * 
 * @param { Array } list
 */
const createPivot = ( list ) => 
    list.reduce( ( previousValue, currentValue ) => previousValue + currentValue, 0 ) / list.length;

/**
 * 
 * @param { Array } list
 */
const verifySameValues = ( list ) => {
    if( !list.length ) return false;
    const firstElement = list[ 0 ];
    return list.every( ( element ) => element === firstElement );
}

/**
 * 
 * @param { Array } list
 */
const quickSort = ( list ) => {
    if( list.length > 1 && !verifySameValues( list ) ) {
        let [ menores, mayores ] = divideList( list, createPivot( list ) );
        [ menores, mayores ] = [ quickSort( menores ), quickSort( mayores ) ];
        return [ ...menores, ...mayores ];
    }
    else return list;
};

const array = [ 4, 5, 3, 1, 2, 4, 4, -5, 0, 13, -9, 4 ];
const sortedArray = quickSort( array );
console.log( `Array: ${ array }\nSorted Array: ${ sortedArray }` );

/**
 * Result:
 * Array: 4,5,3,1,2,4,4,-5,0,13,-9,4
 * Sorted Array: -9,-5,0,1,2,3,4,4,4,4,5,13
 */
