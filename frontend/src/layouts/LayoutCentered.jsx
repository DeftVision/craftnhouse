import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

export default function LayoutCentered({ children }) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <ResponsiveNav />

            <Box sx={{ flex: 1, py: 6, px: 2, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Centered Layout</Typography>
                {children}
            </Box>

            <Footer />
        </Box>
    );
}
