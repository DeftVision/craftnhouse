import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, Services, Testimonials } from './sections';
import Contact from './Contact';
import { Box } from '@mui/material';

export default function SinglePage() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);



    return (
        <>
            <Box component="section" id="hero">
                <Hero />
            </Box>
            <Box component="section" id="services" sx={{ py: 8 }}>
                <Services />
            </Box>
            <Box component="section" id="testimonials" sx={{ py: 8 }}>
                <Testimonials />
            </Box>
            <Box component="section" id="contact" sx={{ py: 8 }}>
                <Contact />
            </Box>
        </>
    );
}

