import React from 'react';

export function Status( { state, position, tape } ) {
    return (
        <div className="status-bar">
            <p>State: { state }</p>
            <p>Position: { position }</p>
        </div>
    );
};
