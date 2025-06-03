import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedBox from './../components/AnimatedBox';
import Seo from '../meta/Seo'


export default function Home () {
    return (
        <>
            <Seo />
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

