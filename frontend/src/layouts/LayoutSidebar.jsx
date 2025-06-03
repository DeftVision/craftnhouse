import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import { Grid, Typography } from '@mui/material';
import Footer from '../components/Footer';

export default function LayoutSidebar({ children }) {
    return (
        <>
            <ResponsiveNav />
            <Grid container>
                <Grid item xs={12} md={3} sx={{ bgcolor: 'grey.200', p: 2 }}>
                    <Typography variant="h6">Sidebar Area</Typography>
                </Grid>
                <Grid item xs={12} md={9} sx={{ p: 2 }}>
                    {children}
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}
