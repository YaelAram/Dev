import { shuffle } from 'underscore';

/*  
    createDeck function to create a new deck, if the deck already has 52 card, then the function just 
    returns the deck
    if 1 >= deck.length < 52 functions discard the deck ( deck is equal to an empty array )
    for section creates a new deck and finally we use Underscore.js to shuffle the deck 
*/
export const createDeck = ( cards, typeOfCards ) => {
    let deck = [];

    for ( const card of cards ) 
        for ( const typeOfCard of typeOfCards ) 
            deck.push( card + typeOfCard );

    return shuffle( deck );
};
