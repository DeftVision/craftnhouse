import React from 'react';
import { Box, Typography } from '@mui/material';

export default function PrivacyPolicy() {
    return (
        <Box sx={{ maxWidth: '800px', mx: 'auto', py: 6, px: 2 }}>
            <Typography variant="h4" gutterBottom>Privacy Policy</Typography>
            <Typography variant="body2" gutterBottom>Last updated: June 2025</Typography>

            <Typography paragraph>
                This Privacy Policy outlines how we collect, use, and protect your information when you visit this website.
            </Typography>

            <Typography variant="h6" gutterBottom>1. Information We Collect</Typography>
            <Typography paragraph>
                We may collect basic contact information (like name and email) when you submit forms. We do not collect sensitive personal or health data.
            </Typography>

            <Typography variant="h6" gutterBottom>2. How We Use It</Typography>
            <Typography paragraph>
                Your information is used only to respond to your inquiries. It is not sold, rented, or shared with third parties.
            </Typography>

            <Typography variant="h6" gutterBottom>3. Cookies</Typography>
            <Typography paragraph>
                This site may use basic cookies to improve user experience. You can disable cookies in your browser settings.
            </Typography>

            <Typography variant="h6" gutterBottom>4. Third-Party Services</Typography>
            <Typography paragraph>
                We do not integrate third-party analytics, advertising, or tracking platforms at this time.
            </Typography>

            <Typography variant="h6" gutterBottom>5. Data Security</Typography>
            <Typography paragraph>
                Reasonable measures are in place to protect your data, but we cannot guarantee absolute security in web transmission.
            </Typography>

            <Typography variant="h6" gutterBottom>6. Contact</Typography>
            <Typography paragraph>
                If you have any questions, please contact us using the form on the Contact page.
            </Typography>
        </Box>
    );
}
