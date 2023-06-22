import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    messageSave: '',
    notes: [],
    active: null
};

export const journalSlice = createSlice( {
    name: 'journal',
    initialState,
    reducers: {
        addNewEmptyNote: ( state, { payload } ) => {
            state.notes.push( payload );
            state.isSaving = false;
            state.messageSave = '';
        },
        setActiveNote: ( state, { payload } ) => {
            state.active = payload;
            state.messageSave = '';
        },
        setNotes: ( state, { payload } ) => {
            state.notes = payload;
        },
        setPhotosActiveNote: ( state, { payload } ) => {
            state.active.imageURLs = [ ...state.active.imageURLs, ...payload ];
            state.isSaving = false;
        },
        updateNote: ( state, { payload } ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === payload.id ) return payload;
                else return note;
            } );
            state.messageSave = `${ payload.title } has been successfully updated`;
        },
        deleteNote: ( state, { payload } ) => {
            state.notes = state.notes.filter( ( note ) => payload !== note.id );
            state.active = null;
        },
        savingNewNote: ( state ) => {
            state.isSaving = true;
            state.messageSave = '';
        },
        setSaving: ( state, { payload } ) => {
            state.isSaving = true;
            state.messageSave = '';
        },
        cleanJournal: ( state, { payload } ) => {
            state.isSaving = false;
            state.messageSave = '';
            state.notes = [];
            state.active = null;
        }
    }
} );

export const {
    addNewEmptyNote,
    cleanJournal,
    deleteNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosActiveNote,
    setSaving,
    updateNote
} = journalSlice.actions;
