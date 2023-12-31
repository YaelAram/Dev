(
    ()=>{
        'use strict'
        
        // C -> Cubs, D -> Diamond, H -> Heart, S -> Sword
        const typeOfCards         = ['C', 'D', 'H', 'S'],
              cards               = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
              newGameButton       = document.querySelector('#new-game-button'), // Button to create a new game
              takeCardButton      = document.querySelector('#take-card-button'), // Button to pop a card from deck
              stopGameButton      = document.querySelector('#stop-game-button'), // Button to execute computer turn
              cardSectionHTML     = document.querySelectorAll('.card-section'), // Div array to show the picked cards
              scoreHTML           = document.querySelectorAll('span'), // Span array to show the current score
              winnerScore         = 21, // Constant used to set the perfect score
              idForPlayer         = 0, // ID used to access to each Div and Span for human player
              idForComputer       = 1; // ID used to access to each Div and Span for computer 

        let deck          = [], // let used to store whole deck
            score         = [0, 0]; // array that stores human player and computer scores

        /*  
            createDeck function to create a new deck, if the deck already has 52 card, then the function just 
            returns the deck
            if 1 >= deck.length < 52 functions discard the deck ( deck is equal to an empty array )
            for section creates a new deck and finally we use Underscore.js to shuffle the deck 
        */
        const createDeck = () => {
            if( deck.length === 52 ) return deck;
            else if( deck.length >= 1 || deck.length < 52 ) deck = [];
        
            for ( const card of cards ) {
                for ( const typeOfCard of typeOfCards ) {
                    deck.push( card + typeOfCard );
                }
            }
            deck = _.shuffle( deck );
        };

        // takeCard function returns the last card of the deck
        const takeCard = () => deck.pop();

        /*  
            valueOfCard function returns how many points value each card
            lastCard substring ignores the last character of the card, it just represent the kind of card and
            doesn't matter to compute the value of the card provided
            'A' cards values = 11 points, example, 'AH' value 11 points
            'J', 'Q' and 'K' cards values = 10 points, example, 'JH' value 10 points
            The reamainder cards value depends of the number of the card, example, card '8H' value 8 points
        */ 
        const valueOfCard = ( lastCard = '' ) => {
            lastCard = lastCard.substring( 0, ( lastCard.length - 1 ) );
            return ( isNaN( lastCard ) ) ? 
                   ( lastCard === 'A' ) ? 11 : 10
                   : Number( lastCard );
        };

        /*
            buildImage function returns an img HTML element with the features
            img.src = cardPicked attribute complete the ruto to the imagen 
            img.class = add the "card" class to apply some css rules
        */
        const buildImage = ( cardPicked = '' ) => {
            const imageContainer = document.createElement( 'img' );
            imageContainer.src   = 'assets/img/' + cardPicked + '.png';
            imageContainer.alt   = 'Card Image ' + cardPicked;
            imageContainer.classList.add( 'card' );
            return imageContainer;
        };
        
        /*
            executeTurn function requires id to identify the player ( human player or computer )
            calls takeCard function to get a card and with the value returned calls valueOfCard function
            and with the result updates the score of the current player, shows it to the user and add the img HTMl
            element generated by buildImage function
        */ 
        const executeTurn = ( id = 0 ) => {
            const lastCard = takeCard();
            score[ id ] += valueOfCard( lastCard );
            scoreHTML[ id ].innerText = score[ id ];
            cardSectionHTML[ id ].append( buildImage( lastCard ) );
        };

        /*
            searchNumberForComputerWinOrDraw function creates and returns a set that contains the numbers between 
            the current human player score and the winnerScore = 21
        */
        const searchNumberForComputerWinOrDraw = () => {
            const numbersForWinOrDraw = new Set();
            for ( let point = score[ idForPlayer ]; point <= winnerScore; point++ ) {
                numbersForWinOrDraw.add( point );
            }
            return numbersForWinOrDraw;
        };

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
        const detectWinner = () => {
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

        /*
            newGameButtonEvent function reset the game values, generates a new deck, reset the scores variables and
            the scores showed to the player, clears the card sections of the HTML ( clear the img HTML elements )
            and enables takeCardButton and stopGameButton
        */
        const newGameButtonEvent = () => {
            createDeck();

            cardSectionHTML[ idForPlayer ].innerHTML   = '';
            cardSectionHTML[ idForComputer ].innerHTML = '';
            scoreHTML[ idForPlayer ].innerText         = '0';
            scoreHTML[ idForComputer ].innerText       = '0';
            takeCardButton.disabled                    = false;
            stopGameButton.disabled                    = false;

            score                                      = [0, 0];
        };

        /*
            takeCardButtonEvent function, if the deck hasn't been created, then calls createDeck function
            calls executeTurn function and pass idForPLayer as a parameter ( execute the human player turn )
            if the current score is greter or equal to winnerScore ( 21 ) then disables the takeCardButton and
            execute stopGameButtonEvent function
        */
        const takeCardButtonEvent = () => {
            if( deck.length == 0 ) createDeck();
            
            executeTurn( idForPlayer );
            
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
            
            while( 
                ( score[ idForPlayer ] === winnerScore ) ? 
                    score[ idForComputer ] < winnerScore : 
                        ( score[ idForPlayer ] > winnerScore ) ?
                            score[ idForComputer ] === 0 :
                                !( searchNumberForComputerWinOrDraw().has( score[ idForComputer ] ) ) && 
                                    score[ idForComputer ] <= winnerScore
            ){
                executeTurn( idForComputer );
            }

            detectWinner();
        };

        // add onClick event to newGameButton, we pass the newGameButtonEvent function
        newGameButton.addEventListener( 'click', newGameButtonEvent );

        // add onClick event to takeCardButton, we pass the takeCardButtonEvent function
        takeCardButton.addEventListener( 'click', takeCardButtonEvent );

        // add onClick event to stopGameButton, we pass the stopGameButtonEvent function
        stopGameButton.addEventListener( 'click', stopGameButtonEvent );
    }
)();
