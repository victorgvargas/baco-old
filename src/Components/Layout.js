import Box from '@mui/material/Box';
import React from 'react';
import Header from './Header';

export default function Layout({children}) {
    return (
        <Box sx={{borderRadius: '5px', backgroundColor: '#FFFFFF'}}>
            <Header />
            {children}
        </Box>
    );
}