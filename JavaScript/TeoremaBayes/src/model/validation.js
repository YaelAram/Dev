export const validateData = 
    ( ...values ) => values.every( value => ( value >= 0.0 && value <= 1.0 ) ) && values.length == 9;
