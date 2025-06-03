import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export default function DesktopNav() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const location = useLocation();

    if (!isDesktop) return null;

    const navLinks = siteConfig.navLinks[siteConfig.layout.mode];
    const align = siteConfig.layout.navAnchor === 'right' ? 'flex-end' : 'flex-start';

    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: align }}>
                <Typography variant='h6' sx={{ mr: 4 }}>
                    {siteConfig.siteName}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {navLinks.map(({ label, href }) => (
                        <Button
                            key={href}
                            component='a'
                            href={href}
                            color='inherit'
                            sx={{
                                borderBottom: location.pathname === href ? '2px solid white' : 'none',
                                borderRadius: 0,
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
