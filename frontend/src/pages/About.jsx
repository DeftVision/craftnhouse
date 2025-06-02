import React from 'react';
import { Box, Typography } from '@mui/material';


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
               <Typography variant='h4'>About</Typography>
               <Typography variant='h5'>This is your about page content.</Typography>
           </Box>

           <Box
               sx={{
                   maxWidth: '600px',
                   mx: 'auto',
                   py: 4,
                   textAlign: 'center'
               }}

           >
               <Typography variant='h4'>About</Typography>
               <Typography variant='h5'>Section 2</Typography>
           </Box>

           <Box
               sx={{
                   maxWidth: '600px',
                   mx: 'auto',
                   py: 4,
                   textAlign: 'center'
               }}

           >
               <Typography variant='h4'>About</Typography>
               <Typography variant='h5'>Section 3</Typography>
           </Box>
       </>
    );
};