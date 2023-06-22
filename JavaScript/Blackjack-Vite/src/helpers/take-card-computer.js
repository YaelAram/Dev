import { searchNumberForComputerWinOrDraw } from './';

export const needNewCard = ( idForComputer, idForPlayer, winnerScore, score ) => {
    return ( score[ idForPlayer ] === winnerScore ) ? 
    score[ idForComputer ] < winnerScore : 
        ( score[ idForPlayer ] > winnerScore ) ?
            score[ idForComputer ] === 0 :
                !( searchNumberForComputerWinOrDraw( score, idForPlayer, winnerScore ).has( score[ idForComputer ] ) ) && 
                    score[ idForComputer ] <= winnerScore
};
