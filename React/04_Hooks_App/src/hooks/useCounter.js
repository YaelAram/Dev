import { useState } from 'react';

export const useCounter = ( initialValue = 0, minValue = -100, maxValue = 100 ) => {
    const [ counter, setCounter ] = useState( initialValue );
    const decrement = ( value = 1 ) => {
        if( ( counter - value ) >= minValue ) setCounter( ( currentValue ) => currentValue - value );
    };
    const reset = () => setCounter( initialValue );
    const increment = ( value = 1 ) => {
        if( ( counter + value ) <= maxValue ) setCounter( ( currentValue ) => currentValue + value );
    };

    return { 
        counter,
        decrement,
        reset,
        increment
    };
};
