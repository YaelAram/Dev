import React from 'react';

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { startLogOut, cleanJournal } from '../../store';

export function NavBar( { drawerWidth = 240 } ) {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch( startLogOut() );
        dispatch( cleanJournal() );
    };

    return (
        <AppBar position='fixed' sx={ {
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
        } }>
            <Toolbar>
                <IconButton color='inherit' edge='start' sx={ { mr: 1, display: { sm: 'none' } } } >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction="row" justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>Journal App</Typography>
                    <IconButton color='error' onClick={ handleLogOut } >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
