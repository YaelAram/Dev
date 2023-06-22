(
    () => {
        'use strict'

        const formulary         = document.querySelector( 'form' ),
              writeSection      = document.querySelector( 'input' ),
              allowedOperations = [ '+', '-', '*', '/', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.' ];

        let firstOperationPerformed = false,
            lastOperator   = '',
            firstNumber    = '',
            secondNumber   = '';

        const getResult = () => {
            const first  = ( typeof firstNumber === "string" ) ? Number( firstNumber ) : firstNumber, 
                  second = Number( secondNumber ),
                  result = ( lastOperator === '+' ) ? ( first + second ) : 
                           ( lastOperator === '-' ) ? ( first - second ) :
                           ( lastOperator === '*' ) ? ( first * second ) : ( first / second );
            writeSection.value = result;
            firstNumber = result;
            secondNumber = '';
        };

        const reset = () => {
            writeSection.innerHTML = '';
            resultSection.innerText = '';
            firstOperationPerformed = false;
            lastOperator   = '';
            firstNumber    = '';
            secondNumber   = '';
        };

        const detectKey = ( itemText ) => {
            if( allowedOperations.slice( 0, 4 ).includes( itemText ) ){
                if( firstOperationPerformed ) getResult();
                else firstOperationPerformed = true;
                lastOperator = itemText;
            }
            else if( itemText === '=' ) getResult();
            else if( itemText === 'Reset' ) reset();
            else{
                if( firstOperationPerformed ) secondNumber = secondNumber.concat( itemText );
                else firstNumber = firstNumber.concat( itemText );
            }
            if( itemText !== '=' && itemText !== 'Reset' ) writeSection.value += itemText;
        };

        document.querySelector( 'html' ).addEventListener( 'keydown', ( event ) => {
            const itemText = event.key;
            if( allowedOperations.includes( itemText ) ) detectKey( itemText );
        } );

        formulary.addEventListener( 'click', ( event ) => {
            const item = event.target;
            const itemText = item.innerText;
            if( item.tagName !== 'FORM' ) detectKey( itemText );
        } );
    }
)();
