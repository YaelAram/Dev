import { useState } from 'react';

export function useManageAMachine() {
    const [ tape, setTape ] = useState( '' );
    const [ result, setResult ] = useState( '' );

    const readTape = ( tape ) => setTape( tape );
    const updateResult = ( character ) => setResult( ( prev ) => prev + character );

    return {
        tape,
        result,
        readTape,
        updateResult
    };
};
