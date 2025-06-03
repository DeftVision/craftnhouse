import React from 'react';
import { Box, Typography } from '@mui/material';

export default function TermsOfService() {
    return (
        <Box sx={{ maxWidth: '800px', mx: 'auto', py: 6, px: 2 }}>
            <Typography variant="h4" gutterBottom>Terms of Service</Typography>
            <Typography variant="body2" gutterBottom>Last updated: June 2025</Typography>

            <Typography paragraph>
                By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </Typography>

            <Typography variant="h6" gutterBottom>1. Use of Site</Typography>
            <Typography paragraph>
                This site is provided for general information and promotional purposes. You may not use it for any illegal or unauthorized purpose.
            </Typography>

            <Typography variant="h6" gutterBottom>2. Intellectual Property</Typography>
            <Typography paragraph>
                All content, design, logos, and assets on this site are owned by the site owner or used with permission. You may not reuse or redistribute without written consent.
            </Typography>

            <Typography variant="h6" gutterBottom>3. Limitation of Liability</Typography>
            <Typography paragraph>
                This site is provided "as is." We make no warranties and are not liable for any damages arising from your use of this website.
            </Typography>

            <Typography variant="h6" gutterBottom>4. Changes to Terms</Typography>
            <Typography paragraph>
                We may update these terms at any time. Your continued use of the site after changes constitutes acceptance.
            </Typography>
        </Box>
    );
}
