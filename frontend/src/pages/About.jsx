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
                 <Typography>Hero Page</Typography>
               </AnimatedBox>
           </Box>
       </>
    );
};