import React from 'react';
import {Box, Typography, Button, Container} from '@mui/material';

export default function Hero() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: { xs: 8, md: 12 },
                textAlign: 'center',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" gutterBottom>
                    Craft "N" House: Skilled Contracting
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 3 }}>
                    Renovations, repairs, and everything in between — built right, the first time.
                </Typography>
                <Button variant="contained" color="secondary" href="#contact">
                    Contact for an Estimate
                </Button>
            </Container>
        </Box>
    );
}
