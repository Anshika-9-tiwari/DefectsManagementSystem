'use client'

import { Box, Stack, Typography, Button, TextField, MenuItem, TableContainer, Select, TableHead, TableRow, TableCell, TableBody, Table, Card, InputLabel,Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Datalogspage(){
  const [data, setData] = useState([]);
  const [partFilter, setPartFilter] = useState('All');
  const [defectFilter, setDefectFilter] = useState('All');
  const [parts, setParts] = useState([]);
  const [defects, setDefects] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    const res = await fetch('/api/manager/data-logs', {
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
    const result = await res.json();
    setData(result.entries);
    setTotalPages(result.totalPages);
  };

    const fetchFilters = async () => {
    const partRes = await fetch('/api/dashboard/parts');
    const partsData = await partRes.json();
    setParts(partsData);

    const defectRes = await fetch('/api/dashboard/defects');
    const defectData = await defectRes.json();
    setDefects(defectData);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleSubmit = () => {
    setPage(1);
    fetchData();
  };

    

    return(
        <Box width={'100%'} sx = {{ marginTop:'2em'
                }}>
                <Stack direction={'column'} width={'100%'} spacing={5}>
                <Typography variant="h5" > Data Logs</Typography>
                <Stack direction={'row'} width={'100%'} sx = {{backgroundColor:'#100F33', height:'10vh', alignItems:'center', justifyContent:'space-between', paddingLeft:'2em', paddingRight:'2em'}}>
                                  <InputLabel sx = {{color:'white'}}> Sort by Part </InputLabel>
                                  <Select size='small'
                                  value={partFilter}
                                  onChange={(e) => setPartFilter(e.target.value)} 
                                  sx={{
                                    backgroundColor: '#100F33',
                                    color: 'white',
                                    border: '1px solid grey',
                                    minWidth: '150px',
                                    '& .MuiSvgIcon-root': { color: 'white' },
                                    }}>
                                        <MenuItem value="All">All</MenuItem>
                                        {parts.map((part) => (
                                            <MenuItem key={part.id} value={part.assyPartNo}>{part.assyPartNo}</MenuItem>
                                            ))}
                                    </Select>
                                    <InputLabel sx = {{color:'white'}}> Sort by Defect </InputLabel>
                                    <Select size='small' 
                                    value={defectFilter}
                                    onChange={(e) => setDefectFilter(e.target.value)}
                                    sx={{
                                    backgroundColor: '#100F33',
                                    color: 'white',
                                    border: '1px solid grey',
                                    minWidth: '150px',
                                    '& .MuiSvgIcon-root': { color: 'white' },
                                    }}>
                                        <MenuItem value="All">All</MenuItem>
                                        {defects.map((defect) => (
                                            <MenuItem key={defect.id} value={defect.defect}>{defect.defect}</MenuItem>
                                            ))}
                                    </Select>
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
                                        // This is the actual calendar icon
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
                                    }}
                                  />                                  
                    
                                  {/* Submit Button */}
                                  <Button variant="contained" color="primary" size="small" onClick={handleSubmit}  sx={{
                                    textTransform: 'none'
                                  }}>
                                    Submit
                                  </Button>
                </Stack>
                        <TableContainer>
          <Table size="small">
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
              {data.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{entry.checkername}</TableCell>
                  <TableCell>{entry.partnumber}</TableCell>
                  <TableCell>{entry.defectstatus}</TableCell>
                  <TableCell>{entry.defect.join(', ')}</TableCell>
                  <TableCell>{new Date(entry.datetime).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
            
            </Stack>

        </Box>
    )
}