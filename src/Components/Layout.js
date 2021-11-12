import Box from '@mui/material/Box';
import React from 'react';
import Header from './Header';

export default function Layout({children}) {
    return (
        <Box sx={{border: '1px solid lightgray',borderRadius: '5px', backgroundColor: '#FFFFFF'}}>
            <Header />
            {children}
        </Box>
    );
}