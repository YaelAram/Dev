import React, { useMemo, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks';
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingIMG } from '../../store';

export function NoteView() {
    const dispatch = useDispatch();
    const { active: activeNote, isSaving, messageSave } = useSelector( state => state.journal );
    const { title, body, date, form, onInputChange } = useForm( activeNote );
    const inputFileRef = useRef();

    const dateString = useMemo( () => {
        const aux = new Date( date );
        const options = {
            timeZone: 'America/Mexico_City',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        const dateFormatter = new Intl.DateTimeFormat( 'en-US', options );
        return dateFormatter.format( aux );
    }, [ date ] );

    useEffect( () => {
        dispatch( setActiveNote( form ) );
    }, [ form ] );

    useEffect( () => {
        if( messageSave ) Swal.fire( 'Updated', messageSave, 'success' );
    }, [ messageSave ] );

    const handleSaveNote = () => {
        dispatch( startSavingNote() );
    };

    const handleFileInputChange = ( { target } ) => {
        if( target.files.length === 0 ) return;
        dispatch( startUploadingIMG( target.files ) );
    };

    const handleDelete = () => {
        dispatch( startDeletingNote() );
    };

    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={ { mb: 1, mt: 6, ml: 2 } }
        className="animate__animated animate__fadeIn animate__faster">
            <Grid item>
                <Typography fontSize={ 40 } fontWeight="light">{ dateString }</Typography>
            </Grid>
            <Grid item>
                <input type="file" multiple onChange={ handleFileInputChange } style={ { display: 'none' } } ref={ inputFileRef }/>
                <IconButton color="primary" disabled={ isSaving } onClick={ () => inputFileRef.current.click() }>
                    <UploadOutlined />
                </IconButton>
                <Button onClick={ handleSaveNote } color="primary" sx={ { padding: 2 } } disabled={ isSaving }>
                    <SaveOutlined sx={ { fontSize: 30, mr: 1 } } />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField type="text" variant="filled" fullWidth placeholder="Ingrese un titulo" label="Titulo"
                    sx={ { border: "none", mb: 1 } } name="title" onChange={ onInputChange } value={ title }/>
                <TextField type="text" variant="filled" fullWidth placeholder="¿Que sucedio hoy?"
                    minRows={ 5 } multiline name="body" onChange={ onInputChange } value={ body } />
            </Grid>
            <Grid container justifyContent="end">
                <Button onClick={ handleDelete } sx={ { mt: 2 } } color="error">
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>
            <ImageGallery images={ activeNote.imageURLs } />
        </Grid>
    );
};
