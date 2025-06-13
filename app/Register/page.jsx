'use client';

import { Box, Card, Stack, Typography, TextField } from '@mui/material';
import Styles from './register.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          const res = await fetch('/api/Register', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({username,password}),
          });
          if (res.ok){
            alert('user registerd successfully')
            setUsername("");
            setPassword("");
            router.push('/Login')
          } else {
           const data = await res.json();
           alert('Registration failed: ' + (data.message || 'Unknown error'));
         }
     } catch (error) {
        console.error('Error registering user:', error);
        alert('Something went wrong. Try again.');
     }
};
    // setUsername('');
    // setPassword('');
    // TODO: Call your register API here

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Box className={Styles.maindiv}>
        <Card className={Styles.logincard}>
          <Stack className={Styles.headingstack}>
            <Typography variant="h3" className={Styles.signinheading}>
              Register
            </Typography>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack className={Styles.sigininform} spacing={2} direction={'column'}>
              <Typography variant="p">Username</Typography>
              <TextField
                className={Styles.usernamefield}
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Typography variant="p">Password</Typography>
              <TextField
                className={Styles.usernamefield}
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className={Styles.loginbutton} type="submit">
                Register
              </button>
            </Stack>
          </form>
          <Stack direction={'column'} className={Styles.log}>
            <p>Already have an account ?</p>
            <Link href = '/Login'>Login</Link>

          </Stack>
        </Card>
      </Box>
    </main>
  );
}