'use client'

import { Box, Stack, Typography, Button, TextField, MenuItem, TableContainer, Select, TableHead, TableRow, TableCell, TableBody, Table, Paper, InputLabel, Pagination, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Datalogspage() {
  const [data, setData] = useState([]);
  const [partFilter, setPartFilter] = useState('All');
  const [defectFilter, setDefectFilter] = useState('All');
  const [parts, setParts] = useState([]); 
  const [defects, setDefects] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/manager/data-logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page,
          part: partFilter,
          defect: defectFilter,
          from: fromDate,
          to: toDate,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      
      if (!text) {
        throw new Error('Empty response from server');
      }

      try {
        const result = JSON.parse(text);
        setData(result.entries || []);
        setTotalPages(result.totalPages || 1);
      } catch (parseError) {
        throw new Error('Invalid JSON response from server');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
      setData([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

     const fetchFilters = async () => {
  try {
    const partRes = await fetch('/api/dashboard/parts');
    const partsData = await partRes.json();
    console.log('Parts Data:', partsData); // Log the response

    // Ensure partsData is an array
    if (Array.isArray(partsData)) {
      setParts(partsData);
    } else {
      console.error('Expected partsData to be an array, but got:', partsData);
      setParts([]); // Set to empty array if not an array
    }

    const defectRes = await fetch('/api/dashboard/defects');
    const defectData = await defectRes.json();
    setDefects(defectData || []);
  } catch (err) {
    console.error('Error fetching filters:', err);
    setParts([]); // Set to empty array on error
    setDefects([]); // Set to empty array on error
  }
};

   

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page, partFilter, defectFilter, fromDate, toDate]);

  const handleSubmit = () => {
    setPage(1);
    fetchData();
  };

  return (
    <Box width={'100%'} sx={{ marginTop: '2em',  margin: { xs: '16px', md: '10px' }, padding: { xs: '16px', md: '24px' } }}>
      <Stack direction={'column'} width={'100%'} spacing={4}>
        <Typography variant="h4" sx={{ mb: 2 }}>Data Logs</Typography>
        
        <Paper sx={{ padding: { xs: '16px', sm: '20px' }, backgroundColor: '#100F33', boxShadow: 5 , borderRadius: '8px' }}>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems={isMobile ? 'flex-start' : 'center'}>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={10} flexGrow={1}>
              <Stack direction="column" spacing={1}>
                <InputLabel sx={{ color: 'white', fontSize: '0.875rem' }}>Sort by Part</InputLabel>
                <Select
                  size='small'
                  value={partFilter}
                  onChange={(e) => setPartFilter(e.target.value)}
                  sx={{
                    backgroundColor: '#100F33',
                    color: 'white',
                    border: '1px solid grey',
                    minWidth: '150px',
                    '& .MuiSvgIcon-root': { color: 'white' },
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  {parts.map((part) => (
                    <MenuItem key={part.id} value={part.assyPartNo}>{part.assyPartNo}</MenuItem>
                  ))}
                </Select>
              </Stack>

              <Stack direction="column" spacing={1}>
                <InputLabel sx={{ color: 'white', fontSize: '0.875rem' }}>Sort by Defect</InputLabel>
                <Select
                  size='small'
                  value={defectFilter}
                  onChange={(e) => setDefectFilter(e.target.value)}
                  sx={{
                    backgroundColor: '#100F33',
                    color: 'white',
                    border: '1px solid grey',
                    minWidth: '150px',
                    '& .MuiSvgIcon-root': { color: 'white' },
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  {defects.map((defect) => (
                    <MenuItem key={defect.id} value={defect.defect}>{defect.defect}</MenuItem>
                  ))}
                </Select>
              </Stack>

              <Stack direction="column" spacing={1}>
                <InputLabel sx={{ color: 'white', fontSize: '0.875rem' }}>From</InputLabel>
                <TextField
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  sx={{
                    backgroundColor: '#100F33',
                    border: '1px solid grey',
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
              </Stack>

              <Stack direction="column" spacing={1}>
                <InputLabel sx={{ color: 'white', fontSize: '0.875rem' }}>To</InputLabel>
                <TextField
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  sx={{
                    backgroundColor: '#100F33',
                    border: '1px solid grey',
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
              </Stack>
            </Stack>

            <Button 
              variant="contained" 
              color="primary" 
              size="medium" 
              onClick={handleSubmit} 
              sx={{ 
                textTransform: 'none',
                mt: isMobile ? 2 : 0,
                alignSelf: isMobile ? 'flex-start' : 'center'
              }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </Stack>
        </Paper>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            Error: {error}
          </Typography>
        )}

        <TableContainer component={Paper} sx={{ borderRadius: '8px', overflow: 'auto', maxHeight: '60vh', boxShadow: 3 }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell><strong>Checker</strong></TableCell>
                <TableCell><strong>Part No</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Defects</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.map((entry) => (
                  <TableRow key={entry.id} hover>
                    <TableCell>{entry.checkername}</TableCell>
                    <TableCell>{entry.partnumber}</TableCell>
                    <TableCell>{entry.defectstatus}</TableCell>
                    <TableCell>{entry.defect?.join(', ') || 'None'}</TableCell>
                    <TableCell>{new Date(entry.datetime).toLocaleString()}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                    {loading ? 'Loading data...' : 'No data available'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {!loading && totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            sx={{ mt: 2, alignSelf: 'center' }}
          />
        )}
      </Stack>
    </Box>
  );
}
