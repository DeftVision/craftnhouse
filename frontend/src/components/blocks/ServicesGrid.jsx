import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import AnimatedBox from '../AnimatedBox';

export default function ServicesGrid() {
    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Services</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4,
                }}
            >
                {[1, 2, 3].map((i) => (
                    <Box
                        key={i}
                        sx={{
                            flex: '1 1 250px',
                            maxWidth: 300,
                        }}
                    >
                        <AnimatedBox>
                            <Paper sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>Service {i}</Typography>
                                <Typography variant="body2">Short description of service {i}.</Typography>
                            </Paper>
                        </AnimatedBox>
                    </Box>
                ))}
            </Box>
        </Box>

    );
}
