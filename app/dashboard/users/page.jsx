"use client";

import React, { useState, useEffect } from 'react';
import { Box, Card, Stack, Typography, Grid } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupIcon from '@mui/icons-material/Group';
import AddUserModal from './AddUserModal';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch('/api/dashboard/users');
            const data = await res.json();
            setUsers(data);
        };
        getUsers();
    }, []);

    const handleAddUser  = async (newUser ) => {
        try {
            const res = await fetch('/api/dashboard/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser ),
            });

            if (res.ok) {
                const addedUser  = await res.json();
                setUsers(prev => [...prev, addedUser ]);
            } else {
                const error = await res.json();
                alert(error.error || 'Failed to add user');
            }
        } catch (error) {
            alert('Error adding user');
        }
    };

    const handleDeleteUser  = async (userId) => {
        if (!confirm("Are you sure you want to delete this user?")) return;

        try {
            const res = await fetch(`/api/dashboard/users/${userId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setUsers(prev => prev.filter(user => user.id !== userId));
            } else {
                const error = await res.json();
                alert(error.error || 'Failed to delete user');
            }
        } catch (error) {
            alert('Error deleting user');
        }
    };

    return (
        <Box sx={{ width: '96%', height: '90%', padding: '2%' ,bgcolor: "#f9fafb", margin:'2%', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
            <Stack spacing={3} sx={{marginLeft: '1%',}}>
                <Stack direction={'row'} alignItems="center" spacing={2}>
                    <GroupIcon fontSize="large" />
                    <Typography variant="h4">Users</Typography>
                </Stack>
                <Stack direction={"row"} spacing={2} flexWrap="wrap" gap={2}  >
                    {/* {['Operators', 'Supervisors', 'Managers', 'Administrators', 'All'].map(role => (
                        <Button key={role} variant="outlined" sx={{
                            textTransform: 'none',
                            color: 'black',
                            borderColor: '#100F33',
                            borderRadius: '10px',
                            '&:hover': {
                                color: '#28D7EB',
                                borderColor: '#28D7EB',
                            },
                        }}>
                            <Typography variant="body2">{role}</Typography>
                        </Button>
                    ))} */}
                    <Button variant="contained" color="primary" onClick={() => setModalOpen(true)} sx={{
                        textTransform: 'none',
                        borderRadius: '10px',
                        gap: 1,
                        '&:hover': {
                            backgroundColor: '#28D7EB',
                        },
                    }}>
                        <AddCircleIcon />
                        <Typography variant="body2">Add</Typography>
                    </Button>
                </Stack>
                <TableContainer sx={{ width: '100%', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                {['Name', 'Username', 'Email', 'Role', 'Actions'].map(header => (
                                    <TableCell key={header} sx={{borderBottom: '1px solid #100F33' }}>
                                        <strong>{header}</strong>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} hover>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                borderRadius: '20px',
                                                px: 0.1,
                                                py: 1,
                                                marginRight:'25px',
                                                textAlign: 'center',
                                                color: 'white',
                                                backgroundColor: user.role === 'Admin' ? 'red' :
                                                    user.role === 'User ' ? 'green' :
                                                        user.role === 'Supervisor' ? 'yellow' :
                                                            user.role === 'Manager' ? 'blue' : 'green',
                                            }}
                                        >
                                            {user.role}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Button sx={{
                                            textTransform: 'none',
                                            color: 'red',
                                            border: ' 0',
                                                borderRadius: '5px',
                                                paddingLeft: '6%',
                                                paddingRight: '6%',
                                                my: 0.5,
                                                fontSize: '0.8rem',
                                                fontWeight: 'bold',
                                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                                                backgroundColor: 'transparent',
                                            '&:hover': {
                                                color: '#28D7EB',
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                            },
                                            '&:visited': {
                                                color: '#28D7EB',
                                            }
                                        }}
                                        onClick={()=> handleDeleteUser(user.id)}
                                        > Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <AddUserModal
                    open={modalOpen}
                    handleClose={() => setModalOpen(false)}
                    onAddUser ={handleAddUser }
                />
            </Stack>
        </Box>
    );
}