import { Router } from 'express';
import { check } from 'express-validator';

import { checkErrors, checkJWT } from '../middlewares/index.js';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/eventsController.js';
import { isDate } from '../helpers/index.js';

export const eventsRoutes = Router();

eventsRoutes.use( checkJWT );

eventsRoutes.get( '/', getEvents );

eventsRoutes.post( '/', [
    check( 'title' ).not().isEmpty().withMessage( 'Title field is required' ),
    check( 'start' ).custom( isDate ).withMessage( 'Start is not a valid date' ),
    check( 'end' ).custom( isDate ).withMessage( 'End is not a valid date' ),
    checkErrors
], createEvent );

eventsRoutes.put( '/:id', [
    check( 'id' ).isMongoId().withMessage( 'Not a valid MongoID' ),
    checkErrors
], updateEvent );

eventsRoutes.delete( '/:id', [
    check( 'id' ).isMongoId().withMessage( 'Not a valid MongoID' ),
    checkErrors
], deleteEvent );
