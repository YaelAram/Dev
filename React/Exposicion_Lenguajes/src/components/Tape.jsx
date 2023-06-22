import React, { useRef } from 'react';

export function Tape( { readTape } ) {
    const tapeInfo = useRef();

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        let tape = tapeInfo.current.value.trim();
        if( tape ) {
            tape = `B${ tape }B`
            readTape( tape );
        }
    };

    return (
        <form onSubmit={ handleSubmit } className="tape">
            <input type="text" placeholder="e.g. 1010" ref={ tapeInfo } autoComplete="off" className="input-tape" />
        </form>
    );
};
