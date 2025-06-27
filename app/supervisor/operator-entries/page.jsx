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
  Autocomplete,
  Paper,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';

export default function OperatorEntries() {
  const [fromdate, setfrom] = useState('');
  const [todate, setto] = useState('');
  const [selectedPart, setSelectedPart] = useState(null);
  const [parts, setParts] = useState([]);
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');

  // Fetch parts data on component mount
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const res = await fetch('/api/dashboard/parts');
        const data = await res.json();
        setParts(data); // Array of { id, assyPartNo } objects
      } catch (error) {
        console.error('Failed to fetch parts:', error);
        setError('Failed to load parts data');
      }
    };

    fetchParts();
  }, []);

  // Fetch operator entries when filters change
  const fetchOperatorEntries = async () => {
    if (!selectedPart?.assyPartNo || !fromdate || !todate) {
      setError('Please select a part number and date range');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/supervisor/operator-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          partnumber: selectedPart.assyPartNo,
          from: fromdate,
          to: todate,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch entries');
      }

      const data = await res.json();
      setEntries(data);
    } catch (err) {
      console.error('Error fetching entries:', err);
      setError(err.message || 'Failed to load entries');
    } finally {
      setLoading(false);
    }
  };

  // Delete an entry
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
        alert('Entry deleted successfully');
      } else {
        throw new Error('Failed to delete entry');
      }
    } catch (err) {
      console.error('Error deleting entry:', err);
      alert(err.message || 'Failed to delete entry');
    }
  };

  return (
    <Box sx={{ 
      width: '95%', 
      margin: { xs: '0.5em auto', sm: '2em auto' },
      padding: { xs: 2, sm: 5 }
    }}>
      <Stack spacing={3}>
        <Typography variant="h4">Operator Entries</Typography>

        {/* Filter Section */}
        <Paper elevation={3} sx={{ 
          backgroundColor: '#ceecfb', 
          padding: 2, 
          borderRadius: '8px' 
        }}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            alignItems="center"
          >
            {/* Searchable Part Number Dropdown */}
            <Autocomplete
              options={parts}
              getOptionLabel={(option) => option.assyPartNo}
              isOptionEqualToValue={(option, value) => 
                option.assyPartNo === value?.assyPartNo
              }
              onChange={(event, newValue) => {
                setSelectedPart(newValue);
              }}
              value={selectedPart}
              filterOptions={(options, state) => {
                if (!state.inputValue) return options;
                return options.filter(option =>
                  option.assyPartNo.toLowerCase()
                    .includes(state.inputValue.toLowerCase())
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Part Number"
                  variant="outlined"
                  size="small"
                  sx={{
                    width: isMobile ? '100%' : 250,
                    backgroundColor: '#fff',
                    boxShadow: 3,
                  }}
                  placeholder="Search parts..."
                />
              )}
              noOptionsText="No parts found"
              fullWidth
            />

            {/* Date Filters */}
            <TextField
              label="From Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={fromdate}
              onChange={(e) => setfrom(e.target.value)}
              sx={{
                width: isMobile ? '100%' : 'auto',
                backgroundColor: '#fff',
                boxShadow: 3,
              }}
            />

            <TextField
              label="To Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={todate}
              onChange={(e) => setto(e.target.value)}
              sx={{
                width: isMobile ? '100%' : 'auto',
                backgroundColor: '#fff',
                boxShadow: 3,
              }}
            />

            {/* Submit Button */}
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={fetchOperatorEntries}
              disabled={loading}
              sx={{ 
                flexShrink: 0,
                textTransform: 'none', 
                backgroundColor: '#69e593',
                '&:hover': { backgroundColor: '#4caf50' },
                boxShadow: 3,
              }}
            >
              {loading ? 'Loading...' : 'Search'}
            </Button>
          </Stack>
        </Paper>

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        {/* Results Table */}
        <TableContainer component={Paper} sx={{ 
          maxHeight: '65vh', 
          overflow: 'auto', 
          borderRadius: '8px', 
          boxShadow: 3 
        }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell><strong>Part Number</strong></TableCell>
                <TableCell><strong>Checker</strong></TableCell>
                <TableCell><strong>Verifier</strong></TableCell>
                <TableCell><strong>Defects</strong></TableCell>
                <TableCell><strong>Date-Time</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.length > 0 ? (
                entries.map((entry) => (
                  <TableRow key={entry.id} hover>
                    <TableCell>{entry.partnumber}</TableCell>
                    <TableCell>{entry.checkername}</TableCell>
                    <TableCell>{entry.verifiername}</TableCell>
                    <TableCell>{entry.defect?.join(', ') || 'None'}</TableCell>
                    <TableCell>
                      {new Date(entry.datetime).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Button 
                        color="error" 
                        size="small" 
                        onClick={() => handleDelete(entry.id)}
                        sx={{ mr: 1 }}
                      >
                        Remove
                      </Button>
                      <IconButton 
                        onClick={() => router.push(
                          `/supervisor/edit-defect?id=${entry.id}&verifiername=${entry.verifiername}&checkername=${entry.checkername}&partnumber=${entry.partnumber}`
                        )}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    {loading ? 'Loading data...' : 'No entries found'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
}
