import { request, response } from 'express';
import { createEventDB, getAllEvents, updateEventService, deleteEventService } from '../services/eventService.js';

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const getEvents = async ( req, res ) => {
    const { uid } = req;
    try{
        const events = await getAllEvents( uid );

        res.status( 200 ).json( {
            ok: true,
            events
        } )
    }
    catch( { message } ){
        res.status( 400 ).json( {
            ok: false,
            error: message
        } );
    }
};

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const createEvent = async ( req, res ) => {
    const { body, uid: user, name } = req;
    const { title, notes, start, end } = body;

    try{
        const event = await createEventDB( { user, title, notes, start, end } );

        res.status( 200 ).json( {
            ok: true,
            event,
            name
        } );
    }
    catch( { message } ){
        res.status( 500 ).json( {
            ok: false,
            error: message
        } );
    }
};

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const updateEvent = async ( req, res ) => {
    const { id: eventID } = req.params;
    const { uid } = req;
    const { title, notes, start, end } = req.body;

    try{
        const event = await updateEventService( eventID, uid, { title, notes, start, end, user: uid } );

        res.status( 200 ).json( {
            ok: true,
            event
        } )
    }
    catch( { message } ){
        res.status( 400 ).json( {
            ok: false,
            error: message
        } );
    }
};

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const deleteEvent = async ( req, res ) => {
    const { id: eventID } = req.params;
    const { uid } = req;

    try{
        const event = await deleteEventService( eventID, uid );

        res.status( 200 ).json( {
            ok: true,
            event
        } )
    }
    catch( { message } ){
        res.status( 400 ).json( {
            ok: false,
            error: message
        } );
    }
};
