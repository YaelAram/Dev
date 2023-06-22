const ages = [ 'menor', 'adulto', 'mayor' ];
const temp = [ 'frio', 'templado', 'calido' ];
const drinks = [ 'fria', 'caliente' ];

const print = ( costumers ) => {
    const table = costumers.map( ( costumer ) => {
        return Object.values( costumer )[2];
    } );
    console.table( table );
};

const printColdHotProbability = ( [ cold, hot ] ) => {
    console.log( `\n  P( fria ) = ${ cold }` );
    console.log( `  P( caliente ) = ${ hot }` );
};

const printDistributionXY = ( data ) => {
    console.log();
    for( const i of [ 0, 1, 2 ] )
        for( const j of [ 0, 1, 2 ] )
            console.log( `  P( ${ ages[ i ] } ∩ ${ temp[ j ] } ): ${ data[i][j] }` );
};

const printDistributionXYZ = ( data, char ) => {
    console.log();
    for( const i of [ 0, 1, 2 ] )
        for( const j of [ 0, 1, 2 ] )
            for( const k of [ 0, 1 ] )
                console.log( `  P( ${ ages[ i ] } ∩ ${ temp[ j ] } ${ char } ${ drinks[ k ] } ): ${ data[i][j][k] }` );
};

const printBayesProbability = ( x, y, z, p ) => {
    console.log( `\n  P( ${ drinks[ z ] } | ${ ages[ x ] } ∩ ${ temp[ y ] } ): ${ p }` );
};

module.exports = {
    print,
    printColdHotProbability,
    printDistributionXY,
    printDistributionXYZ,
    printBayesProbability
};
