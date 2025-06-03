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
                    <Typography variant='h4'>Home</Typography>
                    <Typography variant='h5'>This is your homepage content.</Typography>
                </AnimatedBox>
            </Box>
            <Box
                sx={{
                    maxWidth: '600px',
                    mx: 'auto',
                    py: 4,
                    textAlign: 'center'
                }}

            >
                <AnimatedBox>
                    <Typography variant='h4'>Home</Typography>
                    <Typography variant='h5'>Section 2</Typography>
                </AnimatedBox>
            </Box>
            <Box
                sx={{
                    maxWidth: '600px',
                    mx: 'auto',
                    py: 4,
                    textAlign: 'center'
                }}

            >
               <AnimatedBox>
                   <Typography variant='h4'>Home</Typography>
                   <Typography variant='h5'>Section 3.</Typography>
               </AnimatedBox>
            </Box>
        </>
    );
};

