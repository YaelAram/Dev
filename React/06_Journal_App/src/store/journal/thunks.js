import { doc, collection, setDoc, deleteDoc } from 'firebase/firestore/lite'

import { FirebaseDB } from '../../firebase/config'
import { loadNotes, uploadIMG } from '../../helpers';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosActiveNote, deleteNote } from './';

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        dispatch( savingNewNote() );

        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageURLs: []
        };
        const newPath = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );

        await setDoc( newPath, newNote );

        newNote.id = newPath.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    };
};

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    };
};

export const startSavingNote = () => {
    return async ( dispatch, getState ) => {
        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const { id, ...noteWithoutID } = note;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ id }` );
        await setDoc( docRef, noteWithoutID, { merge: true } );

        dispatch( updateNote( note ) );
    };
};

export const startUploadingIMG = ( files ) => {
    return async ( dispatch ) => {
        dispatch( setSaving() );

        const filePromises = [];
        for( const file of files ) filePromises.push( uploadIMG( file ) );
        const filesResp = await Promise.all( filePromises );
        
        dispatch( setPhotosActiveNote( filesResp ) );
    };
};

export const startDeletingNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ active.id }` );
        await deleteDoc( docRef );

        dispatch( deleteNote( active.id ) );
    };
};

