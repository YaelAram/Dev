/**
 * 
 * @param { Array } list 
 */
const bucketSort = ( list ) => {
    if( !list.every( ( number ) => number > 0 ) ) return list;
    let containers = Array.from( { length: ( Math.max( ...list ) - Math.min( ...list ) + 1 ) }, () => [] );
    for( const number of list ) containers[ number - 1 ].push( number );

    return containers.filter( ( bucket ) => bucket.length ).flat();
};

const array = [ 5, 8, 1, 4, 7, 6, 9, 5, 1 ];
const sortedArray = bucketSort( array );

console.log( `Array: ${ array }\nSorted Array: ${ sortedArray }` );

/**
 * Result:
 * Array: 5,8,1,4,7,6,9,5,1
 * Sorted Array: 1,1,4,5,5,6,7,8,9
 */
