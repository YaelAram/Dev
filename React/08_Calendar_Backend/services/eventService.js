import Event from '../models/Event.js';
import User from '../models/User.js';

export const createEventDB = async ( data ) => {
    try{
        const event = new Event( data );
        const eventSave = event.save();

        return eventSave;
    }
    catch( { message } ){
        throw new Error( `Error while trying to create new event: ${ message }` );
    }
};

export const getAllEvents = async ( uid ) => {
    try{
        const user = await User.findById( uid );
        if( !user ) throw new Error( 'That user does not exist' );
        let events = await Event.find().populate( 'user', 'name' );
        events = events.filter( ( event ) => event.user.id === uid );

        return events;
    }
    catch( { message } ){
        throw new Error( `Error while trying to collect user's events: ${ message }` );
    }
};

export const updateEventService = async ( eventID, uid, data ) => {
    try{
        const event = await Event.findById( eventID );

        if( !event ) throw new Error( 'That event does not exist' );
        if( event.user.toString() !== uid ) 
            throw new Error( 'Forbidden, that event does not belong to the current user' );

        const updatedEvent = await Event.findByIdAndUpdate( eventID, data, { new: true } );

        return updatedEvent;
    }
    catch( { message } ){
        throw new Error( `Error Update Event: ${ message }` );
    }
};

export const deleteEventService = async ( eventID, uid ) => {
    try{
        const event = await Event.findById( eventID );

        if( !event ) throw new Error( 'That event does not exist' );
        if( event.user.toString() !== uid ) 
            throw new Error( 'Forbidden, that event does not belong to the current user' );

        const deletedEvent = await Event.findByIdAndDelete( eventID );

        return deletedEvent;
    }
    catch( { message } ){
        throw new Error( `Error Delete Event: ${ message }` );
    }
};
