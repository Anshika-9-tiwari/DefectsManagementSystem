'use client';

import React, { useState } from 'react';
import { Box, Card, Stack, Typography, TextField, Button, Snackbar, useTheme, useMediaQuery } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Register() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleCloseSnackbar = (_, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setSnackbarMsg('Please fill out all fields.');
      setSnackbarSeverity('warning');
      setSnackbarOpen(true);
      return;
    }

    try {
      const res = await fetch('/api/Register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setSnackbarMsg('User registered successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setUsername('');
        setPassword('');
        setTimeout(() => router.push('/Login'), 1500);
      } else {
        const data = await res.json();
        setSnackbarMsg('Registration failed: ' + (data.message || 'Unknown error'));
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMsg('Something went wrong. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      console.error('Register error:', error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fff', 
        px: 2,
        py: 6,
      }}
    >
       
      <Card
        component="section"
        sx={{
          width: '100%',
          maxWidth: 380,
          borderRadius: 2,
          p: { xs: 4, sm: 6 },
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', 
          backgroundColor: '#fff', 
        }}
        elevation={6}
      >
        
        <Stack spacing={3} alignItems="center">
          <Image
            src="/Velocity-ALogo2.png"
            alt="Velocity Logo"
            width={180}
            height={40} 
            style={{ objectFit: 'contain' }}
            priority
          />
          <Typography
            component="h1"
            variant="h4"
            color="text.primary"
            sx={{ fontWeight: 'bold', letterSpacing: 2 }}
          >
            Create Account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: '100%',
              mt: 1,
            }}
          >
            <Stack spacing={3}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputLabelProps={{ sx: { color: 'text.secondary' } }}
                sx={{
                  borderRadius: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '&:hover fieldset': { borderColor: theme.palette.primary.main },
                    '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                  },
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ sx: { color: 'text.secondary' } }}
                sx={{
                  borderRadius: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '&:hover fieldset': { borderColor: theme.palette.primary.main },
                    '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  py: 1.8,
                  borderRadius: 2,
                  boxShadow: `0 4px 5px ${theme.palette.primary.main}88`,
                  '&:hover': {
                    background: `linear-gradient(135deg)`,
                    boxShadow: '3',
                  },
                }}
              >
                Register
              </Button>
            </Stack>
          </Box>

          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?
            </Typography>
            <Link href="/Login" passHref legacyBehavior>
              <Button variant="text" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                Login
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

