import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { siteConfig } from '../../config/site.config.js'
import { Link, useLocation } from 'react-router-dom'

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (state) => () => {
        setOpen(state);
    }

    if(!isMobile) return null;



    return (
        <AppBar position='static'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {siteConfig.layout.navAnchor === 'left' && (
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    {siteConfig.siteName}
                </Typography>
                {siteConfig.layout.navAnchor === 'right' && (
                    <IconButton
                        edge='end'
                        color='inherit'
                        aria-label='menu'
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>


            <Drawer
                anchor={siteConfig.layout.navAnchor === 'right' ? 'right' : 'left'}
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 240,
                        py: 2,
                        px: 1,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <List disablePadding>
                        {siteConfig.navLinks.map(({ label, path }) => (
                            <ListItem
                                button
                                key={path}
                                component={Link}
                                to={path}
                                onClick={toggleDrawer(false)}
                                selected={location.pathname === path}
                                sx={{
                                    px: 2,
                                    '&.Mui-selected': {
                                        bgcolor: 'grey.100',
                                    },
                                    '& .MuiListItemText-root': {
                                        color: 'text.primary',
                                    },
                                }}
                            >
                                <ListItemText primary={label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>



        </AppBar>
    )
}