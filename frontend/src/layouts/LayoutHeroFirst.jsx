import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import { Box, Typography } from '@mui/material';

export default function LayoutHeroFirst({ children }) {
    return (
        <>
            <ResponsiveNav />
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
                <Typography variant="h3">Hero First Layout</Typography>
            </Box>
            <Box sx={{ mt: 4, px: 2 }}>
                {children}
            </Box>
        </>
    );
}

