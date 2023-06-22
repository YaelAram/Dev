import { parseISO } from "date-fns";

/**
 * 
 * @param { array } events 
 * @returns { array }
 */
export const jsonToEvents = ( events ) => {
    return events.map( ( event ) => {
        event.start = parseISO( event.start );
        event.end = parseISO( event.end );

        return event;
    } );
};
