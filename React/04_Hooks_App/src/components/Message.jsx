import React, { useEffect } from 'react';

export function Message() {
    useEffect( () => {
        console.log( 'Message Component Mounted' );
        return () => console.log( 'Message Component Unmounted' );;
    }, [] )

    return (
        <React.Fragment>
            <h5>UserName already taken</h5>
        </React.Fragment>
    );
};
