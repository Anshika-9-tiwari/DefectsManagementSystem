'use client';

import {
    Box,
    Card,
    Stack,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Container,
    Grid,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [checkername, setcname] = useState('');
    const [verifiername, setvname] = useState('');
    const [partnumber, setpartnum] = useState('');
    const [parts, setParts] = useState([]);
    const [names, setnames] = useState([]);
    const router = useRouter();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const fetchParts = async () => {
            try {
                const res = await fetch('/api/dashboard/parts');
                const data = await res.json();
                setParts(data); // store fetched parts
            } catch (err) {
                console.error('Failed to fetch parts', err);
            }
        };

        const fetchnames = async () => {
            try {
                const res = await fetch('/api/dashboard/users');
                const names = await res.json();
                setnames(names);
            } catch (err) {
                console.error('Failed to get names', err);
            }
        };

        fetchParts();
        fetchnames();
    }, []);

    const handleclick = (e) => {
        e.preventDefault();
        router.push(
            `/defect-check?verifiername=${verifiername}&checkername=${checkername}&partnumber=${partnumber}`
        );
        setpartnum('');
        setvname('');
        setcname('');
    };

    return (
        <Container maxWidth="lg" style={{ padding: theme.spacing(0), marginTop: theme.spacing(0) }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} sm={10} md={8}>
                    <Card
                        elevation={5}
                        style={{
                            padding: theme.spacing(4),
                            borderRadius: theme.shape.borderRadius,
                        }}
                    >
                        <Stack spacing={3}>
                            <Typography
                                variant="h4"
                                component="h1"
                                align="center"
                                gutterBottom
                            >
                                Log Entry
                            </Typography>

                            <FormControl fullWidth required variant="outlined">
                                <InputLabel id="vname-select-label">
                                    Verifier Name
                                </InputLabel>
                                <Select
                                    labelId="vname-select-label"
                                    value={verifiername}
                                    onChange={(e) => setvname(e.target.value)}
                                    label="Verifier Name"
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name.id} value={name.username}>
                                            {name.username}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth required variant="outlined">
                                <InputLabel id="cname-select-label">
                                    Checker Name
                                </InputLabel>
                                <Select
                                    labelId="cname-select-label"
                                    value={checkername}
                                    onChange={(e) => setcname(e.target.value)}
                                    label="Checker Name"
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name.id} value={name.username}>
                                            {name.username}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth required variant="outlined">
                                <InputLabel id="part-select-label">
                                    Part Number
                                </InputLabel>
                                <Select
                                    labelId="part-select-label"
                                    value={partnumber}
                                    onChange={(e) => setpartnum(e.target.value)}
                                    label="Part Number"
                                >
                                    {parts.map((part) => (
                                        <MenuItem
                                            key={part.id}
                                            value={part.assyPartNo}
                                        >
                                            {part.assyPartNo}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleclick}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

