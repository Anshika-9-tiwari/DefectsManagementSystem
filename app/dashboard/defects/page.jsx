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
        <Box marginLeft={'3%'} marginRight={'3%'} marginTop={'2%'}>
            <Stack direction={'column'} spacing={2} width={'100%'} alignItems={'flex-start'}>
                <Typography variant='h5' display="flex" alignItems="center">
                    <ReportIcon sx={{ marginRight: 1 }} /> Defects
                </Typography>
                <Button
                    onClick={() => setOpenModal(true)}
                    variant="outlined"
                    sx={{
                        textTransform: 'none',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: isSmallScreen ? '6px 12px' : '8px 16px',
                    }}
                >
                    <Stack direction={'row'} spacing={1} alignItems="center">
                        <AddCircleIcon />
                        <Typography variant='body2'>Add Defects</Typography>
                    </Stack>
                </Button>

                <TableContainer sx={{ width: '100%', overflowX: 'auto' }}>
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
