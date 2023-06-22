import React from 'react';

import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';

import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store';

export function Home() {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.journal );

    const handleClickCreateNote = () => {
        dispatch( startNewNote() );
    };

    return (
        <JournalLayout>
            {
                ( active )
                ? <NoteView />
                : <NothingSelectedView />
            }
            <IconButton
                size="large"
                sx={ { color: "white", backgroundColor: "error.main", 
                    ':hover': { backgroundColor: "error.main", opacity: 0.7 },
                    position: "fixed", right: 50, bottom: 50 } }    
                onClick={ handleClickCreateNote }
                disabled={ isSaving }
            >
                <AddOutlined sx={ { fontSize: 30 } }/>
            </IconButton>
        </JournalLayout>
    );
};
