import { createDeck, detectWinner, executeTurn, needNewCard } from './helpers';

// C -> Cubs, D -> Diamond, H -> Heart, S -> Sword
const typeOfCards         = [ 'C', 'D', 'H', 'S' ],
    cards               = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ],
    takeCardButton      = document.querySelector( '#take-card-button' ), // Button to pop a card from deck
    stopGameButton      = document.querySelector( '#stop-game-button' ), // Button to execute computer turn
    cardSectionHTML     = document.querySelectorAll( '.card-section' ), // Div array to show the picked cards
    scoreHTML           = document.querySelectorAll( 'span' ), // Span array to show the current score
    winnerScore         = 21, // Constant used to set the perfect score
    idForPlayer         = 0, // ID used to access to each Div and Span for human player
    idForComputer       = 1; // ID used to access to each Div and Span for computer 

let deck          = [], // let used to store whole deck
    score         = [ 0, 0 ]; // array that stores human player and computer scores

/*
    newGameButtonEvent function reset the game values, generates a new deck, reset the scores variables and
    the scores showed to the player, clears the card sections of the HTML ( clear the img HTML elements )
    and enables takeCardButton and stopGameButton
*/
const newGameButtonEvent = () => {
    deck = createDeck( cards, typeOfCards );

    cardSectionHTML[ idForPlayer ].innerHTML   = '';
    cardSectionHTML[ idForComputer ].innerHTML = '';
    scoreHTML[ idForPlayer ].innerText         = '0';
    scoreHTML[ idForComputer ].innerText       = '0';
    takeCardButton.disabled                    = false;
    stopGameButton.disabled                    = false;

    score                                      = [ 0, 0 ];
};

/*
    takeCardButtonEvent function, if the deck hasn't been created, then calls createDeck function
    calls executeTurn function and pass idForPLayer as a parameter ( execute the human player turn )
    if the current score is greter or equal to winnerScore ( 21 ) then disables the takeCardButton and
    execute stopGameButtonEvent function
*/
const takeCardButtonEvent = () => {
    if( deck.length === 0 ) deck = createDeck( cards, typeOfCards );

    executeTurn( idForPlayer, deck, score, scoreHTML, cardSectionHTML );

    if( score[ idForPlayer ] >= 21 ) stopGameButtonEvent();
};

/*
    stopGameButtonEvent function disables takeCardButton and stopGameButton
    if the human player hasn't done at least one turn, then takeCardButtonEvent function is executed once
    while:
    if the human player has a score equal to winnerScore ( 21 ) then the computer will call
        executeTurn while his current score is less than winnerScore ( 21 ), so the computer will try
        to get the same result to tie
    if the human player has a score greater than winnerScore ( 21 ) then the computer will call 
        executeTurn only once, no matter the card obtained the computer will win
    else ( the human player has a score less than winnerScore ( 21 ) ), the computer will call 
        executeTurn while his current score isn't in the set returned by 
        searchNumberForComputerWinOrDraw function
*/
const stopGameButtonEvent = () => {
    takeCardButton.disabled = true;
    stopGameButton.disabled = true;

    if( score[ idForPlayer ] === 0 ) takeCardButtonEvent();

    while( needNewCard( idForComputer, idForPlayer, winnerScore, score ) )
        executeTurn( idForComputer, deck, score, scoreHTML, cardSectionHTML );

    detectWinner( idForComputer, idForPlayer, winnerScore, score, scoreHTML );
};

// add onClick event to newGameButton, we pass the newGameButtonEvent function
document.querySelector( '#new-game-button' ).addEventListener( 'click', newGameButtonEvent );
// add onClick event to takeCardButton, we pass the takeCardButtonEvent function
takeCardButton.addEventListener( 'click', takeCardButtonEvent );
// add onClick event to stopGameButton, we pass the stopGameButtonEvent function
stopGameButton.addEventListener( 'click', stopGameButtonEvent );
