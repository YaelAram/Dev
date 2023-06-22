import React from 'react';

import { addHours } from 'date-fns';

import { useCalendarStore, useUIStore } from '../../hooks';

export function FabNewEvent() {
    const { openDateModal } = useUIStore();
    const { setActiveEvent } = useCalendarStore();

    const handleNewEvent = () => {
        setActiveEvent( {
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 )
        } );
        openDateModal();
    }

    return (
        <button className='btn btn-primary fab' onClick={ handleNewEvent }>
            <i className='fas fa-plus'></i>
        </button>
    );
};
