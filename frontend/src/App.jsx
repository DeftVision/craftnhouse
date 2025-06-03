import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Contact, Home, PrivacyPolicy, TermsOfService } from './pages';
import { Hero, Services, Testimonials } from './pages/sections';
import LayoutWrapper from './layouts/LayoutWrapper';
import { siteConfig } from './config/site.config';
import { Box } from '@mui/material';

function App() {
    return (
        <LayoutWrapper>
            <Box sx={{ mt: '64px', px: 2 }}>
                <Routes>
                    {/* Always redirect `/` to a valid route */}
                    <Route path="/" element={<Navigate to="/hero" replace />} />

                    {siteConfig.layout.mode === 'multi' ? (
                        <>
                            <Route path="/hero" element={<Hero />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/contact" element={<Contact />} />
                        </>
                    ) : (
                        <>
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </>
                    )}

                    {/* Shared routes */}
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </Box>
        </LayoutWrapper>
    );
}


export default App;
