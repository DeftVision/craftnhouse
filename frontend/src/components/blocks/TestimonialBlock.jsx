import React from 'react';
import { Box, Paper, Typography, Avatar, Stack } from '@mui/material';
import AnimatedBox from '../AnimatedBox';

const testimonials = [
    {
        name: 'Jane Doe',
        feedback: 'Deft Vision delivered exactly what we needed. Fast, clean, and no fluff.',
        initials: 'JD'
    },
    {
        name: 'Marcus Li',
        feedback: 'Everything just worked. Our team was up and running in days.',
        initials: 'ML'
    },
    {
        name: 'Sofia Alvarez',
        feedback: 'This was the smoothest site launch I’ve experienced.',
        initials: 'SA'
    }
];

export default function TestimonialBlock() {
    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>What People Are Saying</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4
                }}
            >
                {testimonials.map((t, i) => (
                    <AnimatedBox key={i} sx={{ maxWidth: 300, flex: '1 1 250px' }}>
                        <Paper sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                                <Avatar>{t.initials}</Avatar>
                                <Typography variant="subtitle1">{t.name}</Typography>
                            </Stack>
                            <Typography variant="body2">"{t.feedback}"</Typography>
                        </Paper>
                    </AnimatedBox>
                ))}
            </Box>
        </Box>
    );
}
