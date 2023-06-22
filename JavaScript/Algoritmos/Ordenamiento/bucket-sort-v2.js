/**
 * 
 * @param { number } number 
 * @param { number } bucketRange 
 * @param { number } numberOfBuckets 
 * @param { number } min
 */
const getPosition = ( number, bucketRange, numberOfBuckets, min ) => {
    if( min < 0 ) number -= min;
    let bucketNumber = Math.floor( number / bucketRange );
    if( bucketNumber === numberOfBuckets ) bucketNumber--;
    return bucketNumber;
};

/**
 * 
 * @param { number } buckets 
 * @param { array } list 
 */
const createBuckets = ( list, numberOfBuckets = 5 ) => {
    const buckets = Array.from( { length: numberOfBuckets }, () => [] );
    const min = Math.min( ...list );
    const bucketRange = Math.ceil( ( Math.max( ...list ) - min ) / numberOfBuckets );
    for ( const number of list ) buckets[ getPosition( number, bucketRange, numberOfBuckets, min ) ].push( number );
    return buckets;
};

/**
 * 
 * @param { number } buckets 
 * @param { array } list 
 */
const bucketSort = ( list, numberOfBuckets = 5 ) => {
    const buckets = createBuckets( list, numberOfBuckets );
    for ( let bucket of buckets ) bucket = bucket.sort( ( prev, next ) => prev - next );
    return buckets.flat();
};

const array = [ -5, 0, 5, -10, 10, 8, -1, 7, 0, -3 ];
const sortedArray = bucketSort( array );

console.log( `Array: ${ array }\nSorted Array: ${ sortedArray }` );

/**
 * Result:
 * Array: -5,0,5,-10,10,8,-1,7,0,-3
 * Sorted Array: -10,-5,-3,-1,0,0,5,7,8,10
 */
