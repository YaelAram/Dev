/**
 * 
 * @param { number } x 
 * @param { number } y 
 * @returns 
 */
const createMatrix = ( x, y ) => {
    const matrix = [];
    for( let i = 0 ; i<y ; i++ ) matrix.push( Array.from( { length: x }, () => 0 ) );
    return matrix;
};

/**
 * 
 * @param { array } matrix 
 * @param { string } text1 
 * @param { string } text2 
 */
const initMatrix = ( matrix, text1, text2 ) => {
    const firstLetter1 = text1[ 0 ];
    const firstLetter2 = text2[ 0 ];
    for( let i = 0 ; i<text2.length ; i++ ) matrix[ i ][ 0 ] = ( firstLetter1 === text2[ i ] ) ? 1 : 0;
    for( let i = 0 ; i<text1.length ; i++ ) matrix[ 0 ][ i ] = ( firstLetter2 === text1[ i ] ) ? 1 : 0;
};

/**
 * 
 * @param { array } matrix 
 * @param { string } text1 
 * @param { string } text2 
 */
const fillMatrix = ( matrix, text1, text2 ) => {
    let row = { index: 0, size: 0 };
    for( let i = 1 ; i<text2.length ; i++ )
        for( let j = 1 ; j<text1.length ; j++ )
            if( text2[ i ] === text1[ j ] ) {
                const size = matrix[ i - 1 ][ j - 1 ] + 1;
                matrix[ i ][ j ] = size;
                row = ( size > row.size ) ? { index: i, size } : row;
            }
    return row;
};

/**
 * 
 * @param { string } text2 
 * @param { object } param1 
 */
const buildSubstring = ( text2, { index, size } ) => text2.slice( index - ( size - 1 ), index + 1 );

/**
 * 
 * @param { string } text1 
 * @param { string } text2 
 */
const largestSubstring = ( text1, text2 ) => {
    const matrix = createMatrix( text1.length, text2.length );
    initMatrix( matrix, text1, text2 );
    const row = fillMatrix( matrix, text1, text2 );
    console.table( matrix );
    return buildSubstring( text2, row );
};

const a = 'abcaaab';
const b = 'acaaac';
const substring = largestSubstring( a, b );

console.log( `Text1: ${ a }\nText2: ${ b }\nSubstring: ${ substring }` );

/**
 * Result:
 * ┌─────────┬──-─┬───┬───┬───┬───┬───┬──-─┐
 * │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
 * ├─────────┼──-─┼───┼───┼───┼───┼───┼──-─┤
 * │    0    │ 1 │ 0 │ 0 │ 1 │ 1 │ 1 │ 0 │
 * │    1    │ 0 │ 0 │ 1 │ 0 │ 0 │ 0 │ 0 │
 * │    2    │ 1 │ 0 │ 0 │ 2 │ 1 │ 1 │ 0 │
 * │    3    │ 1 │ 0 │ 0 │ 1 │ 3 │ 2 │ 0 │
 * │    4    │ 1 │ 0 │ 0 │ 1 │ 2 │ 4 │ 0 │
 * │    5    │ 0 │ 0 │ 1 │ 0 │ 0 │ 0 │ 0 │
 * └─────────┴──-─┴───┴───┴───┴───┴───┴──-─┘
 * Text1: abcaaab
 * Text2: acaaac
 * Substring: caaa
 */
