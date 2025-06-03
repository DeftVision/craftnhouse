import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import AnimatedBox from '../AnimatedBox';

export default function ServicesGrid() {
    return (
        <Box sx={{ py: 6, px: 2 }}>
            <Typography variant="h4" gutterBottom align="center">Our Services</Typography>
            <Grid container columns={{ initial: 4, sm: 12 }} gap={3}>
                {[1, 2, 3].map((i) => (
                    <Grid key={i}>
                        <AnimatedBox>
                            <Paper sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="h6">Service {i}</Typography>
                                <Typography variant="body2">Short description of service {i}.</Typography>
                            </Paper>
                        </AnimatedBox>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
