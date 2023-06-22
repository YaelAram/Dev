/*
    searchNumberForComputerWinOrDraw function creates and returns a set that contains the numbers between 
    the current human player score and the winnerScore = 21
*/
export const searchNumberForComputerWinOrDraw = ( score, idForPlayer, winnerScore ) => {
    const numbersForWinOrDraw = new Set();
    for ( let point = score[ idForPlayer ]; point <= winnerScore; point++ ) numbersForWinOrDraw.add( point );

    return numbersForWinOrDraw;
};
