import React, { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store';

import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export function SideBarItem( { note } ) {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch( setActiveNote( note ) );
    };

    const newTitle = useMemo( () => {
        return ( note.title.length > 10 ) ? note.title.substring( 0, 10 ).concat( '...' ) : note.title;
    }, [ note.title ] );

    return (
        <ListItem disablePadding onClick={ handleOnClick }>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
