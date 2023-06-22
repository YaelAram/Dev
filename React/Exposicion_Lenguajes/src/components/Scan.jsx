import React, { useEffect } from 'react';

import { useAMachine } from '../hooks';
import { Status } from '../components';

export function Scan( { tape, updateResult } ) {
    const { state, result, position, handleAction } = useAMachine( tape );

    const handleClick = () => handleAction( `${ state }-${ tape[ position ] }` );

    useEffect( () => updateResult( result ), [ position ] );

    return (
        <React.Fragment>
            <input type="button" value="Next Step" onClick={ handleClick } className="next-step"
                disabled={ state === 'E2' } />
            <Status state={ state } position={ position } tape={ tape } />
            <h1 className="scanned-symbol">{ ( state === 'E2' ) ? 'Finish' : `Scanning ${ tape[ position ] }` }</h1>
        </React.Fragment>
    );
};
