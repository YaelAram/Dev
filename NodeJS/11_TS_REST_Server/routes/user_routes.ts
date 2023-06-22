import { Router } from "express";
import { check } from 'express-validator';

import checkFieldsForErrors from '../middlewares/check_errors';

import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controller/user_controller';
import { existsUserByEmail } from '../database/exists_on_db';

const router = Router();

router.get( '/', [
    check( 'limit' ).optional( { nullable: true } ).isInt( { min: 1 } ).withMessage( 'limit have to be greater than 0' ),
    check( 'offset' ).optional( { nullable: true } ).isInt( { min: 1 } ).withMessage( 'limit have to be greater than 0' ),
    checkFieldsForErrors
], getUsers );

router.get( '/:id', [
    check( 'id' ).isInt( { min: 1 } ).withMessage( 'limit have to be greater than 0' ),
    checkFieldsForErrors
], getUser );

router.post( '/', [
    check( 'name' ).notEmpty().withMessage( 'name is required' ),
    check( 'name' ).isAlpha( 'en-US', { ignore: " " } ).withMessage( 'Only alpha characters are allowed' ),
    check( 'email' ).notEmpty().withMessage( 'email is required' ),
    check( 'email' ).isEmail().withMessage( 'Wrong format for an email' ),
    check( 'email' ).custom( existsUserByEmail ),
    checkFieldsForErrors
], createUser );

router.put( '/:id', [
    check( 'id' ).isInt( { min: 1 } ).withMessage( 'limit have to be greater than 0' ),
    check( 'name' ).optional( { nullable: true } ).notEmpty().withMessage( 'name is required' ),
    check( 'name' ).optional( { nullable: true } ).isAlpha( 'en-US', { ignore: " " } ).withMessage( 'Only alpha characters are allowed' ),
    check( 'email' ).optional( { nullable: true } ).notEmpty().withMessage( 'email is required' ),
    check( 'email' ).optional( { nullable: true } ).isEmail().withMessage( 'Wrong format for an email' ),
    check( 'email' ).optional( { nullable: true } ).custom( existsUserByEmail ),
    checkFieldsForErrors
], updateUser );

router.delete( '/:id', [
    check( 'id' ).isInt( { min: 1 } ).withMessage( 'limit have to be greater than 0' ),
    checkFieldsForErrors
], deleteUser );

export default router;
