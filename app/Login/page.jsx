
'use client';
import {
    Box,
    Card,
    Stack,
    Typography,
    TextField,
    Button, 
    Container, 
    Grid, 
    useMediaQuery, 
} from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const router = useRouter();
    const theme = useTheme(); 
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            username,
            password,
            redirect: false,
        });

        if (res.ok) {
            alert('Login successful');
            router.push('/Logentry'); // your redirect page
        } else {
            alert('Login failed: Invalid credentials');
        }
    };

    return (
        <Container maxWidth="md"> 
          <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }} 
          >
            <Grid item xs={12} sm={8} md={6}> 
              <Card
                  elevation={5} 
                  style={{
                      padding: theme.spacing(4), 
                      borderRadius: theme.shape.borderRadius, 
                  }}
              >
                  <Stack
                      spacing={3}
                      alignItems="center"
                      justifyContent="center"
                  >
                      {/* Logo */}
                      <Image
                          src="/Velocity-ALogo2.png"
                          alt="Velocity Logo"
                          width={180}
                          height={40} 
                          style={{ objectFit: 'contain' }}
                          priority
                      />

                      <Typography variant="h5" component="h1" gutterBottom align="center">
                          Login 
                      </Typography>

                      <form onSubmit={handlesubmit} style={{ width: '100%' , 'borderRadius': '15px'}}>
                          {/* Form Fields */}
                          <Stack spacing={2}>
                              <TextField
                                  label="Username"
                                  variant="outlined"
                                  fullWidth
                                  value={username}
                                  onChange={(e) => setusername(e.target.value)}
                                  required 
                              />
                              <TextField
                                  label="Password"
                                  variant="outlined"
                                  type="password"
                                  fullWidth
                                  value={password}
                                  onChange={(e) => setpassword(e.target.value)}
                                  required
                              />
                              <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                  size="large"
                              >
                                  Login
                              </Button>
                          </Stack>
                      </form>
                  </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
    );
}

