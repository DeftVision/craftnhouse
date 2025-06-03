import { Route, Routes, Navigate } from 'react-router-dom';
import LayoutWrapper from './layouts/LayoutWrapper';
import { siteConfig } from './config/site.config';
import { Box } from '@mui/material';
import { Hero, Services, Testimonials } from './pages/sections';
import Contact from './pages/Contact';

import { SinglePage, TermsOfService, PrivacyPolicy } from './pages';

function App() {
    return (
        <LayoutWrapper>
            <Box sx={{ mt: '64px', px: 2 }}>
                <Routes>
                    {siteConfig.layout.mode === 'spa' ? (
                        <Route path="/" element={<SinglePage />} />
                    ) : (
                        <>
                            <Route path="/" element={<Navigate to="/hero" replace />} />
                            <Route path="/hero" element={<Hero />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/contact" element={<Contact />} />
                        </>
                    )}

                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </Box>
        </LayoutWrapper>
    );
}


export default App;
