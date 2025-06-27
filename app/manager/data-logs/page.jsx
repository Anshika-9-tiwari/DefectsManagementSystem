'use client'

import { Box, Stack, Typography, Button, TextField, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper, InputLabel, Pagination, useMediaQuery, Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Datalogspage() {
  const [data, setData] = useState([]);
  const [partFilter, setPartFilter] = useState(null);
  const [defectFilter, setDefectFilter] = useState(null);
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
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '90vh',
        width: '95vw',
        maxWidth: '1800px',
        margin: '0 auto',
        padding: { xs: 2, sm: 3 },
      }}>
      <Stack direction={'column'} sx={{ width: '100%' }} spacing={3}>
        <Typography variant="h4" sx={{ mb: 2 }}>Data Logs</Typography>
        
        <Paper sx={{ padding: { xs: '16px', sm: '20px' }, backgroundColor: '#ceecfb', boxShadow: 3, borderRadius: '8px' }}>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems={isMobile ? 'flex-start' : 'center'}>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={2} flexGrow={1}>
             
              {/* Part Filter */}
              <Stack direction="column" spacing={0.5} flexGrow={1}>
                <InputLabel sx={{ color: 'black', fontSize: '0.876rem' }}>Sort by Part</InputLabel>
                <Autocomplete
                  options={parts}
                  getOptionLabel={(option) => option.assyPartNo}
                  onChange={(event, newValue) => setPartFilter(newValue ? newValue.assyPartNo : null)}
                  filterOptions={(options, state) => {
                    const displayOptions = options.filter(option => 
                      option.assyPartNo.toLowerCase().includes(state.inputValue.toLowerCase())
                    );
                    return displayOptions;
                  }}
                  renderInput={(params) => (
                    <TextField 
                      fullWidth
                      {...params} 
                      label="Select Part" 
                      variant="outlined" 
                      sx={{ backgroundColor: '#fff', boxShadow: 3 }}
                      size="small"
                      placeholder="Type to search parts..."
                    />
                  )}
                  clearOnBlur={false}
                />
              </Stack>

              {/* Defect Filter */}
              <Stack direction="column" spacing={0.5} flexGrow={1}>
                <InputLabel sx={{ color: 'black', fontSize: '0.876rem' }}>Sort by Defect</InputLabel>
                <Autocomplete
                  options={defects}
                  getOptionLabel={(option) => option.defect}
                  onChange={(event, newValue) => setDefectFilter(newValue ? newValue.defect : null)}
                  filterOptions={(options, state) => {
                    const displayOptions = options.filter(option => 
                      option.defect.toLowerCase().includes(state.inputValue.toLowerCase())
                    );
                    return displayOptions;
                  }}
                  renderInput={(params) => (
                    <TextField 
                      fullWidth
                      {...params} 
                      label="Select Defect" 
                      variant="outlined" 
                      sx={{ backgroundColor: '#fff', boxShadow: 3 }}
                      size="small"
                      placeholder="Type to search defects..."
                    />
                  )}
                  clearOnBlur={false}
                />
              </Stack>

              {/* Date Filters */}
              <Stack direction="column" spacing={0.5} flexGrow={1}>
                <InputLabel sx={{ color: 'black', fontSize: '0.876rem' }}>From</InputLabel>
                <TextField
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  sx={{
                    backgroundColor: '#fff',
                    boxShadow: '3',
                    '& input': {
                      color: 'black',
                    },
                    '& label': {
                      color: 'black',
                    },
                  }}
                />
              </Stack>

              <Stack direction="column" spacing={0.5} flexGrow={1}>
                <InputLabel sx={{ color: 'black', fontSize: '0.876rem' }}>To</InputLabel>
                <TextField
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  sx={{
                    backgroundColor: '#fff',
                    boxShadow: '3',
                    minWidth: '150px',
                    '& input': {
                      color: 'black',
                    },
                    '& label': {
                      color: 'black',
                    },
                  }}
                />
              </Stack>
            </Stack>

            <Button 
              variant="contained" 
              color="success" 
              size="medium" 
              onClick={handleSubmit} 
              sx={{ 
                textTransform: 'none',
                mt: isMobile ? 2 : 0,
                padding: '8px 15px',
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
