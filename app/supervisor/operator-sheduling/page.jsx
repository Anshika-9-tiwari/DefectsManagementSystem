'use client'

import {
  Stack,
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  TextField,
  InputLabel,
  useMediaQuery
} from "@mui/material";
import React, { useState } from "react";

export default function OperatorInspectionSummary() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [summary, setSummary] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile size

  const handleSubmit = async () => {
    const res = await fetch('/api/supervisor/operator-inspection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: fromDate, to: toDate }),
    });

    const data = await res.json();
    setSummary(data);
  };

  return (
    <Box width={'100%'} sx={{ marginTop: '2em', padding: { xs: 2, sm: 3 } }}>
      <Stack direction={'column'} width={'100%'} spacing={5}>
        <Typography variant="h4">Operator Inspection Summary</Typography>
        <Stack direction={'column'} spacing={2} sx={{ backgroundColor: '#100F33', padding: 2, borderRadius: '8px' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
            <InputLabel sx={{ color: 'white' }}>Select date</InputLabel>
            <TextField
              label="From"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
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
                flexGrow: 1, // Allow to grow
              }}
            />
            <TextField
              label="To"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
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
                flexGrow: 1, // Allow to grow
              }}
            />
            <Button variant="contained" color="primary" size="small" onClick={handleSubmit} sx={{ textTransform: 'none' }}>
              Submit
            </Button>
          </Stack>
        </Stack>

        {summary && (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ color: 'grey' }}>
                    <strong>Total Quantity Checked: {summary.totalChecked}</strong>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ color: 'grey' }}>
                    <strong>Total Approved: {summary.totalApproved}</strong>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ color: 'grey' }}>
                    <strong>Total Rejected: {summary.totalRejected}</strong>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ borderTop: '1.5px solid black' }}>
                  <TableCell><strong>Operator Username</strong></TableCell>
                  <TableCell><strong>Total Checked</strong></TableCell>
                  <TableCell><strong>Approved</strong></TableCell>
                  <TableCell><strong>Rejected</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {summary.operators.map((op, index) => (
                  <TableRow key={index}>
                    <TableCell>{op.username}</TableCell>
                    <TableCell>{op.total}</TableCell>
                    <TableCell>{op.approved}</TableCell>
                    <TableCell>{op.rejected}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Stack>
    </Box>
  );
}
