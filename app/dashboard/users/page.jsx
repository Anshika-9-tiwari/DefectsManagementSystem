// "use client";

// import React, { useState, useEffect } from 'react';
// import { Box, Card, Stack, Typography } from "@mui/material"
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import GroupIcon from '@mui/icons-material/Group';
// import AddUserModal from './AddUserModal'

// export default function Users() {
//     const [userss, setusers] = useState([]);
//     const [modalopen, setmodalopen] = useState(false);

//     useEffect(()=>{
//         const getusers = async ()=>{
//             const res = await fetch('/api/dashboard/users');
//             const data = await res.json();
//             setusers(data);
//         };
//         getusers();
//     },[]);
//     const handleAddUser = async (newUser) => {
//         try {
//             const res = await fetch('/api/dashboard/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newUser),
//             });

//             if (res.ok) {
//                 const addedUser = await res.json();
//                 setusers(prev => [...prev, addedUser]);
//             } else {
//                 const error = await res.json();
//                 alert(error.error || 'Failed to add user');
//             }
//         } catch (error) {
//             alert('Error adding user');
//         }
//     };
//     const handleDeleteUser = async (userId) => {
//         if (!confirm("Are you sure you want to delete this user?")) return;

//         try {
//             const res = await fetch(`/api/dashboard/users/${userId}`, {
//                 method: 'DELETE',
//             });

//             if (res.ok) {
//                 setusers(prev => prev.filter(user => user.id !== userId));
//             } else {
//                 const error = await res.json();
//                 alert(error.error || 'Failed to delete user');
//             }
//         } catch (error) {
//             alert('Error deleting user');
//         }
//     };

    
//     return (
//         <Box sx={{ width: '100%', height: '100%' , marginLeft:'3%'}}>
//             <Stack direction={'column'} spacing={4} sx={{ width: '100%', height: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '2%' }}>
//                 <Stack sx={{height:'8%'}} direction={'row'} spacing={2}>
//                 <GroupIcon/>
//                 <Typography variant="h5"> Users</Typography>
//                 <br />
//             </Stack>
//                 <Stack direction={"row"} spacing={7} paddingLeft={0} marginLeft={0} width={'60%'} >

//                     <Button sx={{
//                         textTransform: 'none',
//                         color: 'black',
//                         paddingLeft: '8%',
//                         paddingRight: '8%',
//                         border: '1px solid #100F33 ',
//                         borderRadius: '10px',
//                         '&:hover': {
//                             color: '#28D7EB',
//                             backgroundColor: 'transparent',
//                         },
//                         '&:visited': {
//                             color: '#28D7EB',
//                         }
//                     }}><Typography variant="p" fontSize={14}>Operators</Typography></Button>
//                     <Button sx={{
//                         textTransform: 'none',
//                         color: 'black',
//                         paddingLeft: '8%',
//                         paddingRight: '8%',
//                         border: '1px solid #100F33 ',
//                         borderRadius: '10px',
//                         '&:hover': {
//                             color: '#28D7EB',
//                             backgroundColor: 'transparent',
//                         },
//                         '&:visited': {
//                             color: '#28D7EB',
//                         }
//                     }}><Typography variant="p" fontSize={14}>Supervisors</Typography></Button>
//                     <Button sx={{
//                         textTransform: 'none',
//                         color: 'black',
//                         paddingLeft: '8%',
//                         paddingRight: '8%',
//                         border: '1px solid #100F33',
//                         borderRadius: '10px',
//                         '&:hover': {
//                             color: '#28D7EB',
//                             backgroundColor: 'transparent',
//                         },
//                         '&:visited': {
//                             color: '#28D7EB',
//                         }
//                     }}><Typography variant="p" fontSize={14}>Managers</Typography></Button>
//                     <Button sx={{
//                         textTransform: 'none',
//                         color: 'black',
//                         paddingLeft: '10%',
//                         paddingRight: '10%',
//                         border: '1px solid #100F33 ',
//                         borderRadius: '10px',
//                         '&:hover': {
//                             color: '#28D7EB',
//                             backgroundColor: 'transparent',
//                         },
//                         '&:visited': {
//                             color: '#28D7EB',
//                         }
//                     }}><Typography variant="p" fontSize={14}>Administrators</Typography></Button>
//                     <Button sx={{
//                         textTransform: 'none',
//                         color: 'black',
//                         paddingLeft: '8%',
//                         paddingRight: '8%',
//                         border: '1px solid #100F33 ',
//                         borderRadius: '10px',
//                         '&:hover': {
//                             color: '#28D7EB',
//                             backgroundColor: 'transparent',
//                         },
//                         '&:visited': {
//                             color: '#28D7EB',
//                         }
//                     }}><Typography variant="p" fontSize={14}>All</Typography></Button>
//                     <Button sx={{
//                         textTransform: 'none',
//                         color: 'black',
//                         paddingLeft: '8%',
//                         paddingRight: '8%',
//                         '&:hover': {
//                             color: '#28D7EB',
//                             backgroundColor: 'transparent',
//                         },
//                         '&:visited': {
//                             color: '#28D7EB',
//                         }
//                     }} 
//                       onClick={() => setmodalopen(true)}
//                     ><Stack direction={'row'}  spacing={1} >
//                        <AddCircleIcon />
//                         <Typography variant="p" fontSize={14}>Add</Typography>
//                         </Stack>
//                         </Button>

//                 </Stack>
//                 <TableContainer sx={{ width: '99%' }}>
//                     <Table size="small" sx={{ '& .MuiTableCell-root': { py: 0.2, px: 0.5, fontSize: 12 } }}>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell key={"Name"} sx={{ paddingLeft: 0, textAlign: 'left', borderBottom: '1px solid #100F33' }}><strong>Name</strong></TableCell>
//                                 <TableCell key={"Username"} sx={{ paddingLeft: 0, textAlign: 'left', borderBottom: '1px solid #100F33' }}><strong>Username</strong></TableCell>
//                                 <TableCell key={"Password"} sx={{ paddingLeft: 0, textAlign: 'left', borderBottom: '1px solid #100F33' }}><strong>Email</strong></TableCell>
//                                 <TableCell key={"Role"} sx={{ paddingLeft: 0, textAlign: 'left', borderBottom: '1px solid #100F33' }}><strong>Role</strong></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {userss.map((user, index) => (
//                                 <TableRow key={index}>
//                                     <TableCell sx={{ paddingLeft: 0, borderBottom: '1px solid blue' }}> {user.name}</TableCell>
//                                     <TableCell sx={{ paddingLeft: 0, borderBottom: '1px solid blue' }}> {user.username}</TableCell>
//                                     <TableCell sx={{ paddingLeft: 0, borderBottom: '1px solid blue' }}>{user.email}</TableCell>
//                                     <TableCell sx={{ px: 1, paddingLeft: 0, borderBottom: '1px solid blue' }}>
//                                         <Box
//                                             sx={{
//                                                 borderRadius: '20px',
//                                                 px: 2,
//                                                 py: 0.5,
//                                                 color: 'black',
//                                                 display: 'inline-block',
//                                                 backgroundColor:
//                                                     user.role === 'Admin' ? 'red'  :
//                                                         user.role === 'User' ? 'green' :
//                                                             user.role === 'Supervisor' ? 'yellow' :
//                                                                 user.role === 'Manager' ? 'blue' :
//                                                                     'grey',
//                                                 color: user.role === 'supervisor' ? 'black' : 'white'
//                                             }}
//                                         >
//                                             {user.role}
//                                         </Box>
//                                     </TableCell>
//                                     <TableCell>
//                                         <Button sx={{
//                                             textTransform: 'none',
//                                             color: 'red',
//                                             border: ' 0',
//                                                 borderRadius: '5px',
//                                                 paddingLeft: '6%',
//                                                 paddingRight: '6%',
//                                                 my: 0.5,
//                                                 fontSize: '0.8rem',
//                                                 fontWeight: 'bold',
//                                                 boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
//                                                 backgroundColor: 'transparent',
//                                             '&:hover': {
//                                                 color: '#28D7EB',
//                                                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                                                 backgroundColor: 'transparent',
//                                                 border: 'none',
//                                             },
//                                             '&:visited': {
//                                                 color: '#28D7EB',
//                                             }
//                                         }}
//                                         onClick={()=> handleDeleteUser(user.id)}
//                                         > Remove</Button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <AddUserModal
//                     open={modalopen}
//                     handleClose={() => setmodalopen(false)}
//                     onAddUser={handleAddUser}
//                 />

//             </Stack>

//         </Box>
//     )
// }

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
        <Box sx={{ width: '100%', height: '100%', padding: '2%' }}>
            <Stack spacing={4} sx={{justifyContent:'center' , alignItems:'center'}}>
                <Stack direction={'row'} alignItems="center" spacing={2}>
                    <GroupIcon fontSize="large" />
                    <Typography variant="h4">Users</Typography>
                </Stack>
                <Stack direction={"row"} spacing={2} flexWrap="wrap"   >
                    {['Operators', 'Supervisors', 'Managers', 'Administrators', 'All'].map(role => (
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
                    ))}
                    <Button variant="contained" color="primary" onClick={() => setModalOpen(true)} sx={{
                        textTransform: 'none',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: '#28D7EB',
                        },
                    }}>
                        <AddCircleIcon />
                        <Typography variant="body2">Add</Typography>
                    </Button>
                </Stack>
                <TableContainer sx={{ width: '100%' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                {['Name', 'Username', 'Email', 'Role', 'Actions'].map(header => (
                                    <TableCell key={header} sx={{ textAlign: 'center', borderBottom: '1px solid #100F33' }}>
                                        <strong>{header}</strong>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} hover>
                                    <TableCell sx={{ textAlign: 'center' }}>{user.name}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{user.username}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{user.email}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Box
                                            sx={{
                                                borderRadius: '20px',
                                                px: 0.1,
                                                py: 1,
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
                                    <TableCell sx={{ textAlign: 'center' }}>
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
