import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material'

export default function ContactForm () {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);

    return (
        <Box
            component='form'
            name='contact'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >

            <input type='hidden' name='form-name' value='contact' />
            <input type='hidden' name='bot-field' />


            <Stack direction='column' spacing={2}>
                <Typography variant='h4'>Contact Us</Typography>
                <TextField
                    type='text'
                    label='Name'
                    fullWidth
                    name='name'
                    required
                    arial-label='Name'
                />
                <TextField
                    type='email'
                    label='Email'
                    fullWidth
                    name='email'
                    required
                    arial-label='Email'
                />
                <TextField
                    type='text'
                    label='Message'
                    name='message'
                    placeholder='Tell us about your project'
                    fullWidth
                    multiline
                    required
                    arial-label='Message'
                />
                <Button type='submit' variant='contained' sx={{ mt: 2 }}>Submit</Button>
            </Stack>

        </Box>
    );
};