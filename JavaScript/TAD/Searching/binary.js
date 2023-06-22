const sort = ( values = [], start, end ) => {
    let central = ( ( start + end )/2 ) | 0,
        pivot = values[central],
        i = start,
        j = end;
    do{
        while( values[ i ]<pivot ) i++;
        while( values[ j ]>pivot ) j--;
        if( i<=j ){
            [ values[ i ], values[ j ] ] = [ values[ j ], values[ i ] ];
            i++;
            j--;
        }
    }while( i<=j );
    if( start<j ) sort( values, start, j );
    if( i<end ) sort( values, i, end );
}

const binarySearch = ( value, list ) =>{
    let start = 0,
        end = list.length - 1,
        index = -1,
        middle = -1;
    while( start<=end ){
        middle = ( ( start + end )/2 ) | 0;
        if( list[ middle ] === value ){
            index = middle;
            break;
        }
        if( list[ middle ]>value ) end = ( middle - 1 ); 
        if( list[ middle ]<value ) start = ( middle + 1 );
    }
    return index;
}

let array = [ 3, 2, 4, 1, 5 ];
sort( array, 0, ( array.length - 1 ) );
console.log( array );
console.log( binarySearch( 1, array ) );
console.log( binarySearch( 5, array ) );
console.log( binarySearch( 6, array ) );
console.log( binarySearch( 0, array ) );
