import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedBox from './../components/AnimatedBox';

export default function Home () {
    return (
        <>
            <Box
                sx={{
                    maxWidth: '600px',
                    mx: 'auto',
                    py: 4,
                    textAlign: 'center'
                }}
            >
                <AnimatedBox>
                   <Typography variant='h5'>Home Page.</Typography>
               </AnimatedBox>
            </Box>
        </>
    );
};

