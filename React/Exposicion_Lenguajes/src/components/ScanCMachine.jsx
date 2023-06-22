import React, { useEffect } from 'react';

import { useCMachine } from '../hooks';
import { Status } from '../components';

export function ScanCMachine( { tape, updateResult } ) {
    const { state, result, position, handleAction, handleExit } = useCMachine( tape );

    const handleClickNextStep = () => handleAction( `${ state }-${ tape[ position ] }` );
    const handleClickExit = () => handleExit();

    useEffect( () => updateResult( result ), [ position ])

    return (
        <React.Fragment>
            <input type="button" value="Next Step" onClick={ handleClickNextStep } className="next-step" 
                disabled={ state === 'E1' || state === 'E2' } />
            <input type="button" value="Exit" onClick={ handleClickExit } className="next-step"
                disabled={ state !== 'E1' || state === 'E2' } />
            <Status state={ state } position={ position } tape={ tape } />
            <h1 className="scanned-symbol">{ ( state === 'E2' ) ? 'Finish' : `Scanning ${ tape[ position ] }` }</h1>
        </React.Fragment>
    );
};
