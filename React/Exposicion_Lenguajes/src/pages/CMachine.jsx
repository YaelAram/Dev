import React from 'react';

import { Tape, ScanCMachine } from '../components';
import { useManageAMachine } from '../hooks';

export function CMachine() {
    const { tape, result, readTape, updateResult } = useManageAMachine();

    return (
        <div className="main-content">
            <h1>Choice Machine</h1>
            <div className="container">
                <Tape readTape={ readTape } />
                { ( tape ) ? <ScanCMachine tape={ tape } updateResult={ updateResult } /> : undefined }
                { ( tape ) ? <label className="result">{ result }</label> : undefined }
            </div>
        </div>
    );
};
