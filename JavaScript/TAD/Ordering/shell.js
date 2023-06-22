const sort = ( ...values ) => {
    let jump = ( values.length/2 ) | 0;
    while( jump>0 ){
        for( let i = jump ; i<values.length ; i++ ){
            let j = i - jump;
            while( j>=0 ){
                let k = j + jump;
                if( values[ j ] > values[ k ] ){
                    [ values[ j ], values[ k ] ] = [ values[ k ], values[ j ] ]; 
                    j -= jump;
                }
                else j = -1;
            }
        }
        jump = ( jump/2 ) | 0;
    }
    return values;
}

console.log( sort( 1, 4, 6, 2, 1, 6, 9, 8, 1 ) );
