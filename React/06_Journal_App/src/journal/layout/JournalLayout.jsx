import { Box } from '@mui/system';
import React from 'react';
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export function JournalLayout( { children } ) {
    return (
        <Box sx={ { display: 'flex' } } className="animate__animated animate__fadeIn animate__faster" >
            <NavBar drawerWidth={ drawerWidth } />
            <SideBar drawerWidth={ drawerWidth } />
            <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
                { children }
            </Box>
        </Box>
    );
};
