import * as React from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

export default function ButtonAppBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)' }}>
            <Toolbar>
                {/* Optional: Mobile Menu Icon */}
                {isMobile && (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Logo */}
                <Box sx={{ marginLeft:'2em',flexGrow: 1, display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                    <Image
                        src="/Velocity-ALogo2.png"
                        alt="Velocity Logo"
                        width={180}
                        height={40}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Box>

                {/* Logout Button */}
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => signOut({ callbackUrl: '/Login' })}
                    sx={{ backgroundColor: '#100F33', color: 'white', borderRadius: '8px' }}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}