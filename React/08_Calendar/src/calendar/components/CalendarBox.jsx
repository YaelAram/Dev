import React from 'react';

export function CalendarBox( { event } ) {
    const { title, user } = event;

    return (
        <React.Fragment>
            <strong>{ title }</strong>
            <span> - { user.name }</span>
        </React.Fragment>
    );
};
