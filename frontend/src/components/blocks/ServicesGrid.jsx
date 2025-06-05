import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import AnimatedBox from '../AnimatedBox';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import KitchenIcon from '@mui/icons-material/Kitchen';

export default function ServicesGrid() {

    const services = [
        {
            title: 'Basement Finish',
            // image: '/images/services/basement.jpg',
            description: 'Transform your basement into livable, finished space — from framing to flooring.',
            icon: <HomeRepairServiceIcon sx={{ fontSize: 48, color: 'primary.main' }} />
        },
        {
            title: 'Kitchen Remodeling',
            // image: '/images/services/kitchen.jpg',
            description: 'Modern layouts, cabinet upgrades, and custom finishes for the heart of your home.',
            icon: <KitchenIcon sx={{ fontSize: 48, color: 'primary.main' }} />
        },
        {
            title: 'Home Repair',
            // image: '/images/services/repair.jpg',
            description: 'From drywall patches to trim fixes, we handle repairs that improve your space.',
            icon: <ConstructionIcon sx={{ fontSize: 48, color: 'primary.main' }} />
        }
    ];



    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Services</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4,
                }}
            >
                {services.map((service, i) => (
                    <Box
                        key={i}
                        sx={{
                            flex: '1 1 250px',
                            maxWidth: 300,
                        }}
                    >
                        <AnimatedBox>
                            <Paper sx={{ p: 0, borderRadius: 3, overflow: 'hidden' }}>
                                <Box sx={{ p: 3 }}>
                                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                                    <Typography variant="h6" gutterBottom>{service.title}</Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>{service.description}</Typography>
                                    <Typography
                                        component="a"
                                        href="#contact"
                                        sx={{
                                            color: 'secondary.main',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' }
                                        }}
                                    >
                                        Get a Quote →
                                    </Typography>
                                </Box>
                            </Paper>
                        </AnimatedBox>
                    </Box>
                ))}

            </Box>
        </Box>

    );
}
