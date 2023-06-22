export const toDecimalFraction = ( binario = "" ) => {
    let valor = 0.5,
    acumulador = 0;
    for( const char of binario ){
        if( char == '1' ) acumulador += valor;
        valor *= 0.5;
    }
    return acumulador;
}
