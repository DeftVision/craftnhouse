import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import { Box, Typography } from '@mui/material';

export default function LayoutCentered({ children }) {
    return (
        <>
            <ResponsiveNav />
            <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Centered Layout</Typography>
                {children}
            </Box>
        </>
    );
}
