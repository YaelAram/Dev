/*
    detectWinner function compares both scores ( human player and computer )
    first if:
        both players have scores greater than winnerScore ( 21 ) OR are equal, then both players have tied
    second if:
        human player has an score less or equal to winnerScore ( 21 ) AND computer has a score greater than
        winnerScore ( 21 ) OR human player has a score equal to winnerScore ( 21 ) AND computer score has
        an score less than winnerScore ( 21 ), then human player has won
    third if:
        computer has an score less or equal to winnerScore ( 21 ) AND human player has a score greater than
        winnerScore ( 21 ) OR computer has a score equal to winnerScore ( 21 ) AND human player score has
        an score less than winnerScore ( 21 ), then computer has won
    else ( both scores are less than winnerScore ( 21 ) ) the function compares the scores and do a 
        substraction with the winnerScore ( 21 ), the smallest result is the winner
*/
export const detectWinner = ( idForComputer, idForPlayer, winnerScore, score, scoreHTML ) => {
    if( ( score[ idForPlayer ] > winnerScore && score[ idForComputer ] > winnerScore ) || 
        ( score[ idForPlayer ] === score[ idForComputer ] ) ) 
            scoreHTML[ idForPlayer ].innerHTML += ' -> Draw';
    else if( ( score[ idForPlayer ] <= winnerScore && score[ idForComputer ] > winnerScore ) || 
        ( score[ idForPlayer ] === winnerScore && score[ idForComputer ] < winnerScore ) ) 
            scoreHTML[ idForPlayer ].innerHTML += ' -> Winner';
    else if( ( score[ idForPlayer ] > winnerScore && score[ idForComputer ] <= winnerScore ) || 
        ( score[ idForComputer ] === winnerScore && score[ idForPlayer ] < winnerScore ) )
            scoreHTML[ idForComputer ].innerHTML += ' -> Winner';
    else{
        const playerDifference = Math.abs( winnerScore - score[ idForPlayer ] );
        const computerDifference = Math.abs( winnerScore - score[ idForComputer ] );
        if( playerDifference < computerDifference ) scoreHTML[ idForPlayer ].innerHTML += ' -> Winner';
        else scoreHTML[ idForComputer ].innerHTML += ' -> Winner';
    }
};
