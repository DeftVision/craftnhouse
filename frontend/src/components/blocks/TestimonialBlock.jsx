import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import AnimatedBox from '../AnimatedBox';

export default function TestimonialBlock() {
    const testimonials = [
        { name: 'Alice', quote: 'This was exactly what I needed.' },
        { name: 'John', quote: 'Amazing support and fast turnaround.' },
        { name: 'Sara', quote: 'My clients love the new site.' }
    ];

    return (
        <Box sx={{ py: 6, px: 2 }}>
            <Typography variant="h4" gutterBottom align="center">Testimonials</Typography>
            <Stack spacing={3}>
                {testimonials.map(({ name, quote }, i) => (
                    <AnimatedBox key={i}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="body1">"{quote}"</Typography>
                            <Typography variant="subtitle2" align="right">– {name}</Typography>
                        </Paper>
                    </AnimatedBox>
                ))}
            </Stack>
        </Box>
    );
}
