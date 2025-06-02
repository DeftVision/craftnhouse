import React from 'react';
import { Box } from '@mui/material';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <Box
            sx={{
                maxWidth: '600px',
                mx: 'auto',      // horizontal centering
                py: 4,
                px: 2,           // optional: side padding on mobile
                textAlign: 'center',
            }}
        >
            <ContactForm />
        </Box>
    );
}
