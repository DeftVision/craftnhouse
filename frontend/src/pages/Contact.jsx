import React from 'react';
import { Box } from '@mui/material'
import ContactForm from '../components/ContactForm'

export default function Contact () {
    return (
        <Box
            sx={{
                maxWidth: '600px',
                max: 'auto',
                py: 4,
                textAlign: 'center'
            }}

        >
            <ContactForm />
        </Box>
    );
};