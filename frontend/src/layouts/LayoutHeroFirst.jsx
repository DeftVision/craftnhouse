import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import { Box } from '@mui/material';

export default function LayoutHeroFirst({ children }) {
    return (
        <>
            <ResponsiveNav />
            <Box sx={{ mt: '64px', px: 2 }}>
                {children}
            </Box>
        </>
    );
}
