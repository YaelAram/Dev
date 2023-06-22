import React, { useState, useEffect } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar } from 'react-big-calendar';

import { localizer, messages } from '../../helpers';
import { CalendarBox, CalendarModal, FabDeleteEvent, FabNewEvent, NavBar } from '../components';
import { useUIStore, useCalendarStore } from '../../hooks';

const LAST_VIEW_KEY = 'lastView';

export function CalendarPage() {
    const [ lastView, setLastView ] = useState( localStorage.getItem( LAST_VIEW_KEY ) ?? 'month' );
    const { openDateModal } = useUIStore();
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

    const onDoubleClick = () => openDateModal();

    const onSelect = ( event ) => {
        setActiveEvent( event );
    };

    const onViewChange = ( event ) => {
        localStorage.setItem( LAST_VIEW_KEY, event );
        setLastView( event );
    };

    useEffect( () => {
        startLoadingEvents();
    }, [] );

    return (
        <React.Fragment>
            <NavBar />
            <Calendar
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={ { height: 500 } }
                messages={ messages }
                components={ {
                    event: CalendarBox
                } }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange } />
            <CalendarModal />
            <FabNewEvent />
            <FabDeleteEvent />
        </React.Fragment>
    );
};
