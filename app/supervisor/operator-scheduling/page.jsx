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
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Paper
} from "@mui/material";
import React, { useState } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function OperatorInspection() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!fromDate || !toDate) {
      alert("Please select both dates.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/supervisor/operator-inspection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: fromDate, to: toDate }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setSummary(data);
    } catch (error) {
      alert(error.message || "Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Responsive container padding
  const containerPadding = isMobile ? 1 : 3;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        marginTop: '2em',
        padding: containerPadding
      }}>
        <Stack direction="column" spacing={isMobile ? 2 : 4}>
          {/* Header */}
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold' }}>
            Operator Inspection Summary
          </Typography>

          {/* Date Selection */}
          <Paper elevation={3} sx={{ 
            backgroundColor: '#ceecfb',
            padding: isMobile ? 1 : 2,
            borderRadius: 2
          }}>
            <Stack 
              direction={isMobile ? "column" : "row"} 
              spacing={isMobile ? 2 : 4} 
              alignItems={isMobile ? "stretch" : "center"}
              justifyContent="space-between"
            >
              <InputLabel sx={{ 
                color: '#000', 
                alignSelf: isMobile ? 'flex-start' : 'center',
                pt: isMobile ? 0 : 1
              }}>
                Select Date Range
              </InputLabel>

              <TextField
                label="From"
                type="date"
                size="small"
                fullWidth={isMobile}
                InputLabelProps={{ shrink: true }}
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: 3,
                  borderRadius: 1,
                  '& input': {
                    color: '#333',
                    '&::-webkit-calendar-picker-indicator': {
                      // filter: 'invert(1)',
                    },
                  },
                  '& label': {
                    color: '#000',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />

              <TextField
                label="To"
                type="date"
                size="small"
                fullWidth={isMobile}
                InputLabelProps={{ shrink: true }}
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: 3,
                  borderRadius: 1,
                  '& input': {
                    color: '#333',
                    '&::-webkit-calendar-picker-indicator': {
                      // filter: 'invert(1)',
                    },
                  },
                  '& label': {
                    color: '#000',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />

              <Button 
                variant="contained" 
                color="primary" 
                size={isMobile ? "medium" : "small"}
                onClick={handleSubmit}
                disabled={loading}
                fullWidth={isMobile}
                sx={{ 
                  textTransform: 'none',
                  minWidth: isMobile ? '100%' : 'auto'
                }}
              >
                {loading ? 'Loading...' : 'Submit'}
              </Button>
            </Stack>
          </Paper>

          {/* Results Section */}
          {summary && (
            <Paper elevation={3} sx={{ overflowX: 'auto', borderRadius: 2 }}>
              <TableContainer>
                <Table size={isMobile ? "small" : "medium"} aria-label="operator inspection summary">
                  <TableHead>
                    {/* Summary Rows */}
                    <TableRow>
                      <TableCell 
                        colSpan={isMobile ? 2 : 5} 
                        align="center" 
                        sx={{ 
                          color: 'grey',
                          fontWeight: 'bold',
                          fontSize: isMobile ? '0.875rem' : '1rem'
                        }}
                      >
                        {isMobile ? `Checked: ${summary.totalChecked}` : `Total Quantity Checked: ${summary.totalChecked}`}
                      </TableCell>
                      {!isMobile && (
                        <>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </>
                      )}
                    </TableRow>

                    {!isMobile && (
                      <>
                        <TableRow>
                          <TableCell colSpan={5} align="center" sx={{ color: 'grey', fontWeight: 'bold' }}>
                            Total Approved: {summary.totalApproved}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={5} align="center" sx={{ color: 'grey', fontWeight: 'bold' }}>
                            Total Rejected: {summary.totalRejected}
                          </TableCell>
                        </TableRow>
                      </>
                    )}

                    {/* Column Headers */}
                    <TableRow sx={{ borderTop: '1.5px solid black' }}>
                      <TableCell sx={{ fontWeight: 'bold' }}>Operator</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }} align="right">{isMobile ? 'Total' : 'Total Checked'}</TableCell>
                      {!isMobile && <TableCell sx={{ fontWeight: 'bold' }} align="right">Approved</TableCell>}
                      {!isMobile && <TableCell sx={{ fontWeight: 'bold' }} align="right">Rejected</TableCell>}
                      <TableCell sx={{ fontWeight: 'bold' }}>Part Numbers</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {summary.operators.map((op, index) => (
                      <TableRow key={index}>
                        <TableCell>{op.username}</TableCell>
                        <TableCell align="right">{op.total}</TableCell>
                        {!isMobile && <TableCell align="right">{op.approved}</TableCell>}
                        {!isMobile && <TableCell align="right">{op.rejected}</TableCell>}
                        <TableCell sx={{
                          maxWidth: isMobile ? 120 : 300,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: isMobile ? 'nowrap' : 'normal'
                        }}>
                          {op.partnumbers.join(', ')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
