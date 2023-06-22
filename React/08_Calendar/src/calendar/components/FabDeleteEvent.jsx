import React from 'react';

import { useCalendarStore, useUIStore } from '../../hooks';

export function FabDeleteEvent() {
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDeleteEvent = () => {
        startDeletingEvent();
    }

    return (
        <button className='btn btn-danger fab-delete' onClick={ handleDeleteEvent } 
            style={ { display: ( hasEventSelected ) ? '' : 'none' } }>
            <i className='fas fa-trash-alt'></i>
        </button>
    );
};
