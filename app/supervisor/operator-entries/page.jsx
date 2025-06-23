'use client'

import {
  Stack,
  Box,
  InputLabel,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  TextField,
  Select,
  MenuItem,
  IconButton,
  useMediaQuery
} from "@mui/material"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';

export default function OperatorEntries() {
  const [fromdate, setfrom] = useState('');
  const [todate, setto] = useState('');
  const [partnum, setpartnum] = useState('');
  const [parts, setparts] = useState([]);
  const [entries, setEntries] = useState([]);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile size

  useEffect(() => {
    const fetchparts = async () => {
      try {
        const res = await fetch('/api/dashboard/parts');
        const data = await res.json();
        const partsss = data.map(p => p.assyPartNo);
        setparts(partsss);
      } catch (error) {
        console.error('Failed to fetch parts:', error);
      }
    };

    fetchparts();
  }, []);

  const fetchOperatorEntries = async () => {
    try {
      const res = await fetch('/api/supervisor/operator-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          partnumber: partnum,
          from: fromdate,
          to: todate,
        }),
      });

      const data = await res.json();
      setEntries(data);
    } catch (err) {
      console.error('Failed to fetch operator entries:', err);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to remove this entry?");
    if (!confirmed) return;
    try {
      const res = await fetch('/api/supervisor/delete-entry', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setEntries(prev => prev.filter(entry => entry.id !== id));
        alert('Deleted successfully');
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error('Error deleting entry:', err);
    }
  };

  return (
    <Box width={'90%'} flex={1} justifyContent={'center'} sx={{ marginTop: '2em', marginLeft:'2em', padding: { xs: 2, sm: 5 }}}>
      <Stack direction={'column'} width={'100%'} spacing={5}>
        <Typography variant="h4">Operator Entries</Typography>
        <Stack direction={'column'} spacing={2} sx={{ backgroundColor: '#100F33', padding: 2, borderRadius: '8px' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <InputLabel sx={{ color: 'white' }}>Select part number</InputLabel>
            <Select
              size="small"
              value={partnum}
              onChange={(e) => setpartnum(e.target.value)}
              sx={{
                backgroundColor: '#100F33',
                color: 'white',
                border: '1px solid grey',
                minWidth: '150px',
                '& .MuiSvgIcon-root': { color: 'white' },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              {parts.map((p, index) => (<MenuItem key={index} value={p}>{p}</MenuItem>))}
            </Select>
            <TextField
              label="From"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={fromdate}
              onChange={(e) => setfrom(e.target.value)}
              sx={{
                backgroundColor: '#100F33',
                '& input': {
                  color: 'white',
                  '&::-webkit-calendar-picker-indicator': {
                    filter: 'invert(1)',
                  },
                },
                '& label': {
                  color: 'white',
                },
              }}
            />
            <TextField
              label="To"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={todate}
              onChange={(e) => setto(e.target.value)}
              sx={{
                backgroundColor: '#100F33',
                '& input': {
                  color: 'white',
                  '&::-webkit-calendar-picker-indicator': {
                    filter: 'invert(1)',
                  },
                },
                '& label': {
                  color: 'white',
                },
              }}
            />
            <Button variant="contained" color="primary" size="small" onClick={fetchOperatorEntries} sx={{ textTransform: 'none' }}>
              Submit
            </Button>
          </Stack>
        </Stack>
        <TableContainer sx={{ maxHeight: isMobile ? '400px' : '600px', overflowY: 'auto',  borderRadius: '8px', boxShadow: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'grey' }}><strong>Part Number</strong></TableCell>
                <TableCell sx={{ color: 'grey' }}><strong>Checker Name</strong></TableCell>
                <TableCell sx={{ color: 'grey' }}><strong>Verifier Name</strong></TableCell>
                <TableCell sx={{ color: 'grey' }}><strong>Defect</strong></TableCell>
                <TableCell sx={{ color: 'grey' }}><strong>Date-Time</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{entry.partnumber}</TableCell>
                  <TableCell>{entry.checkername}</TableCell>
                  <TableCell>{entry.verifiername}</TableCell>
                  <TableCell>{entry.defect.join(', ')}</TableCell>
                  <TableCell>{new Date(entry.datetime).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button color="error" size="small" onClick={() => handleDelete(entry.id)}>Remove</Button>
                    <IconButton onClick={() => { router.push(`/supervisor/edit-defect?id=${entry.id}&verifiername=${entry.verifiername}&checkername=${entry.checkername}&partnumber=${entry.partnumber}`); }}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  )
}
