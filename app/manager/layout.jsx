'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TocIcon from '@mui/icons-material/Toc';
import StorageIcon from '@mui/icons-material/Storage';
import Image from 'next/image';

const drawerWidth = 240;

const menuItems = [
  { text: 'Data Analysis', href: '/manager/analysis', icon: <AnalyticsIcon/> },
  { text: 'Data Summary', href: '/manager/data-record', icon: <TocIcon/> },
  { text: 'Data Logs', href: '/manager/data-logs', icon: <StorageIcon/> },
];

export default function ManagerLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const drawerContent = (
    <>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{display: 'flex',  }}>
          <Image
              src="/Velocity-ALogo2.png"
              alt="Velocity Logo"
              width={180}
              height={40}
              style={{ objectFit: 'contain' }}
              priority
          />
        </Box>
      </Toolbar>

      <Stack
        direction={'column'}
        marginTop={7}
        spacing={0}
        sx={{ alignItems: 'left', justifyContent: 'left', width: { drawerWidth } }}
      >
        <List disablePadding>
        {menuItems.map(({ text, href,icon }) => (
    
            <ListItem key={text}
              disablePadding
            >
              <Link href={href} style={{ width: '100%' }}>
                <ListItemButton selected={pathname === href}
                  sx={{ color: 'white', pl: 2, borderLeft: pathname === href ? '4px solid white' : 'none', '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {icon}
                    <ListItemText primary={text} />
                  </Box>
                </ListItemButton>
              </Link>
            </ListItem>
          
        ))}
        </List>
      </Stack>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Toggle Drawer when closed */}
      {!open && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 10,
            left: 0,
            zIndex: 1300,
            backgroundColor: '#100F33',
            borderRadius: '0 4px 4px 0',
            color: 'white',
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}

      {/* Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: open ? 'block' : 'none', 
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#100F33',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          ml: open ? `0%` : '0%', // ← only if you're toggling
          transition: 'margin 0.3s ease',
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%'
        }}
      >

        {children}
      </Box>
    </Box>
  );
}