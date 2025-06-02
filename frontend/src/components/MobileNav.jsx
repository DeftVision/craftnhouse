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
            <Toolbar>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    Site Title
                </Typography>
            </Toolbar>


            <Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 240, padding: 2, boxSizing: 'border-box' }}>
                    <List>
                        <ListItem
                            button
                            component={Link}
                            to='/'
                            onClick={toggleDrawer(false)}
                            selected={location.pathname === '/'}
                        >
                            <ListItemText primary='Home' />
                        </ListItem>

                        <ListItem
                            button
                            component={Link}
                            to='/about'
                            onClick={toggleDrawer(false)}
                            selected={location.pathname === '/about'}
                        >
                            <ListItemText primary='About' />
                        </ListItem>

                        <ListItem
                            button
                            component={Link}
                            to='/contact'
                            onClick={toggleDrawer(false)}
                            selected={location.pathname === '/contact'}
                        >
                            <ListItemText primary='Contact' />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>


        </AppBar>
    )
}