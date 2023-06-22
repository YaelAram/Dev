import React from 'react';

import { Tape, Scan } from '../components';
import { useManageAMachine } from '../hooks';

export function AMachine() {
    const { tape, result, readTape, updateResult } = useManageAMachine();

    return (
        <div className="main-content">
            <h1>Automatic Machine</h1>
            <div className="container">
                <Tape readTape={ readTape } />
                { ( tape ) ? <Scan tape={ tape } updateResult={ updateResult } /> : undefined }
                { ( tape ) ? <label className="result">{ result }</label> : undefined }
            </div>
        </div>
    );
};
