/**
 * 
 * @param { Array } values 
 * @param { number } item 
 */
const binarySearch = ( values, item, start = 0, end = 1 ) => {
    if( start > end ) return { position: -1, item, code: 404 };
    else if( start === end ){
        if( values[ start ] === item ) return { position: start, item, code: 200 };
        else return { position: -1, item, code: 404 };
    }
    else{
        let pivot = Math.floor( ( end + start ) / 2 );
        if( values[ pivot ] === item ) return { position: pivot, item, code: 200 };
        else if( values[ pivot ] > item ) end = pivot - 1;
        else start = pivot + 1;
        return binarySearch( values, item, start, end );
    }
};

const array = [ -10, -5, -3, -1, 0, 5, 7, 8, 10 ];
const value1 = binarySearch( array, -3, undefined, array.length - 1 ); 
const value2 = binarySearch( array, 8, undefined, array.length - 1 );
const value3 = binarySearch( array, -2, undefined, array.length - 1 );

console.log( `Array: ${ array }\nValue1: ${ JSON.stringify( value1 ) }
Value2: ${ JSON.stringify( value2 ) }\nValue3: ${ JSON.stringify( value3 ) }` );

/**
 * Result:
 * Array: -10,-5,-3,-1,0,5,7,8,10
 * Value1: {"position":2,"item":-3,"code":200}
 * Value2: {"position":7,"item":8,"code":200}
 * Value3: {"position":-1,"item":-2,"code":404}
 */
