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

let array = [ -1, -5, 3, 1, 0, -10, 10, -24, 30 ];
sort( array, 0, ( array.length - 1 ) ) ;
console.log( array );
