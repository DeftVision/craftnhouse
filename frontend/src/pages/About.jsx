import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedBox from './../components/AnimatedBox';

export default function About () {
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
                   <Typography variant='h4'>About</Typography>
                   <Typography variant='h5'>This is your About page content.</Typography>
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
                   <Typography variant='h4'>About</Typography>
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
                   <Typography variant='h4'>About</Typography>
                   <Typography variant='h5'>Section 3.</Typography>
               </AnimatedBox>
           </Box>
       </>
    );
};