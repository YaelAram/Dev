const VALUE_KEY = 'value';

export const getMarginalProbability = ( three, node ) => {
    let result = 0.0;
    for( const key in three ) result += ( three[ key ][ VALUE_KEY ] * three[ key ][ node ] );
    return result;
};

export const getBayes = ( three, query ) => {
    const conditionalProbability = three[ query.charAt( 0 ) ][ query.charAt( 2 ) ];
    const nodeProbability = three[ query.charAt( 0 ) ][ VALUE_KEY ];
    const marginalProbability = getMarginalProbability( three, query.charAt( 2 ) );
    return ( conditionalProbability * nodeProbability ) / marginalProbability;
};
