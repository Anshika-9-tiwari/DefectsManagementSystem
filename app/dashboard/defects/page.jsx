"use client";

import { Box, Typography, Stack, Button, Table, TableContainer, TableBody, TableCell, TableRow, TableHead, useTheme, useMediaQuery } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState, useEffect } from 'react';
import AddDefectModal from './AddDefectModal';

export default function Defects() {
    const [openModal, setOpenModal] = useState(false);
    const [defects, setDefects] = useState([]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is small

    const fetchDefects = async () => {
        const res = await fetch('/api/dashboard/defects');
        const data = await res.json();
        setDefects(data);
    };

    const handleRemove = async (id) => {
        if (!confirm("Are you sure you want to delete this defect?")) return;
        try {
            const res = await fetch(`/api/dashboard/defects?id=${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                fetchDefects();
            } else {
                console.error('Failed to delete defect');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    useEffect(() => {
        fetchDefects();
    }, []);

    return (
        <Box marginLeft={'5%'} marginRight={'3%'} marginTop={'2%'} padding={'2%'} sx={{ width: '96%', height: '95%',bgcolor: "#f9fafb", margin:'2%', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
            <Stack direction={'column'} spacing={3} width={'100%'} alignItems={'flex-start'}>
                <Typography variant='h5' display="flex" alignItems="center">
                    <ReportIcon sx={{ marginRight: 1 }} /> Defects
                </Typography>
                <Button
                    onClick={() => setOpenModal(true)}
                   variant="contained" color="primary"
                    sx={{
                        textTransform: 'none',
                        borderRadius: '10px',
                        padding: isSmallScreen ? '6px 12px' : '8px 16px',
                        '&:hover': {
                            backgroundColor: '#28D7EB',
                        },
                    }}
                >
                    <Stack direction={'row'} spacing={1} alignItems="center">
                        <AddCircleIcon />
                        <Typography variant='body2'>Add Defects</Typography>
                    </Stack>
                </Button>

                <TableContainer sx={{ width: '100%', overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                    <Table size='small' sx={{
                        minWidth: isSmallScreen ? '400px' : '600px',
                        '& .MuiTableCell-root': {
                            py: 0.5,
                            px: 1.5,
                            fontSize: isSmallScreen ? 12 : 14,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }
                    }}>
                        <TableHead>
                            <TableRow sx={{ borderBottom: '1.4px solid black' }}>
                                <TableCell><strong>Sno.</strong></TableCell>
                                <TableCell><strong>Defect Code</strong></TableCell>
                                <TableCell><strong>Defect</strong></TableCell>
                                <TableCell><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {defects.map((defect, index) => (
                                <TableRow key={defect.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{defect.defectcode}</TableCell>
                                    <TableCell>{defect.defect}</TableCell>
                                    <TableCell sx={{ paddingLeft: 0 }}>
                                        <Button
                                            onClick={() => handleRemove(defect.id)}
                                            sx={{
                                                textTransform: 'none',
                                                color: 'red',
                                                boxShadow:'0 1px 3px rgba(0, 0, 0, 0.1)',
                                                '&:hover': {
                                                    color: '#28D7EB',
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
            <AddDefectModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                refresh={fetchDefects}
            />
        </Box>
    );
}