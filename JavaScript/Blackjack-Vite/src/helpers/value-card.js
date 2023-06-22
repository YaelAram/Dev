/*  
    valueOfCard function returns how many points value each card
    lastCard substring ignores the last character of the card, it just represent the kind of card and
    doesn't matter to compute the value of the card provided
    'A' cards values = 11 points, example, 'AH' value 11 points
    'J', 'Q' and 'K' cards values = 10 points, example, 'JH' value 10 points
    The reamainder cards value depends of the number of the card, example, card '8H' value 8 points
*/ 
export const valueOfCard = ( lastCard = '' ) => {
    lastCard = lastCard.substring( 0, ( lastCard.length - 1 ) );

    return ( isNaN( lastCard ) ) ? 
        ( lastCard === 'A' ) ? 11 : 10
        : Number( lastCard );
};
