'use client'
import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
  Grid,
  useMediaQuery
} from '@mui/material';
import Icon from '@mdi/react';
import { mdiMicrosoftExcel } from '@mdi/js';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export default function EntrySummary() {
  const [defects, setDefects] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchDefects = async () => {
      try {
        const res = await fetch('/api/dashboard/defects');
        const data = await res.json();
        const defectNames = data.map((d) => d.defect);
        setDefects(defectNames);
      } catch (error) {
        console.error('Failed to fetch defects:', error);
      }
    };

    fetchDefects();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/manager/datarecords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: fromDate, to: toDate }),
      });

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error('Error fetching summary:', err);
    }
  };

  const downloadExcel = async () => {
    if (!data.length) return;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Entry Records');

    const headers = [
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Month', key: 'month', width: 15 },
      { header: 'Inspection Module', key: 'inspectionModule', width: 25 },
      { header: 'Part No.', key: 'partNo', width: 15 },
      { header: 'Item Code', key: 'itemCode', width: 15 },
      { header: 'Insp. Qty', key: 'inspQty', width: 12 },
      { header: 'Ok Qty', key: 'okQty', width: 12 },
      { header: 'Rej Qty', key: 'rejQty', width: 12 },
      ...defects.map(defect => ({
        header: defect,
        key: defect,
        width: 12
      }))
    ];

    worksheet.columns = headers;

    worksheet.getRow(1).eachCell((cell) => {
      const headerText = cell.value; 
      cell.font = { bold: true };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb: headerText === 'Rej Qty' ? 'FFFF0000' : '68bced',
        },
      };
      cell.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    data.forEach(row => {
      const formattedRow = {
        date: row.date,
        month: row.month,
        inspectionModule: row.inspectionModule,
        partNo: row.partNo,
        itemCode: row.itemCode,
        inspQty: row.inspQty,
        okQty: row.okQty,
        rejQty: row.rejQty,
      };

      defects.forEach(defect => {
        formattedRow[defect] = row.defects?.[defect] || 0;
      });

      worksheet.addRow(formattedRow);
    });

    worksheet.views = [
      {
        state: 'frozen',
        xSplit: 8,
        ySplit: 1
      }
    ];

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    saveAs(blob, `entry-records-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  return (
    <Box sx={{ 
      margin: { xs: '16px', md: '24px' },
      padding: { xs: '16px', md: '24px' }
    }}>
      <Stack spacing={4}>
        <Typography variant='h4' sx={{ 
          mb: 3,
          pl: { xs: 1, sm: 0 }
        }}>
          Entry Summary
        </Typography>
        
        <Paper sx={{ 
          padding: { xs: '16px', sm: '20px' },
          backgroundColor: '#100F33',
          borderRadius: '8px'
        }}>
          <Grid container spacing={15} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" sx={{ 
                color: 'white',
                display: 'block',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                marginLeft: { xs: 0, sm: '8px' },
                mb: { xs: 1, sm: 0 }
              }}>
                <strong>Entry summary</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} container spacing={15} justifyContent="flex-end ">
              <Grid item xs={6} sm="auto">
                <TextField
                  fullWidth
                  label="From"
                  type="date"
                  size="small"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    backgroundColor: '#100F33',
                    '& input': {
                      color: 'white',
                      padding: { xs: '12px 8px', sm: '8px' },
                      '&::-webkit-calendar-picker-indicator': {
                        filter: 'invert(1)',
                      },
                    },
                    '& label': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} sm="auto">
                <TextField
                  fullWidth
                  label="To"
                  type="date"
                  size="small"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    backgroundColor: '#100F33',
                    '& input': {
                      color: 'white',
                      padding: { xs: '12px 8px', sm: '8px' },
                      '&::-webkit-calendar-picker-indicator': {
                        filter: 'invert(1)',
                      },
                    },
                    '& label': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} sm="auto">
                <Button 
                  fullWidth
                  variant="contained" 
                  color="primary" 
                  size="medium" 
                  onClick={handleSubmit} 
                  sx={{ 
                    textTransform: 'none',
                    py: { xs: 1, sm: 0.5 }
                  }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6} sm="auto">
                <Button
                  fullWidth
                  variant="outlined"
                  size="medium"
                  onClick={downloadExcel}
                  sx={{
                    backgroundColor: 'green',
                    borderColor: 'white',
                    textTransform: 'none',
                    py: { xs: 1, sm: 0.5 }
                  }}
                  startIcon={<Icon path={mdiMicrosoftExcel} size={1} color={'white'} />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        
        <TableContainer 
          component={Paper} 
          sx={{ 
            width: '100%', 
            overflowX: 'auto',
            borderRadius: '8px',
            p: 1
          }}
        >
          <Table size='medium' sx={{
            '& .MuiTableCell-root': {
              py: 1.2, 
              px: 1.8, 
              fontSize: 14, 
              minWidth: '150px', 
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }
          }}>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Month</strong></TableCell>
                <TableCell><strong>Inspection Module</strong></TableCell>
                <TableCell><strong>Part No.</strong></TableCell>
                <TableCell><strong>Item Code</strong></TableCell>
                <TableCell><strong>Insp. Qty</strong></TableCell>
                <TableCell><strong>Ok Qty</strong></TableCell>
                <TableCell sx={{ borderRight: 'solid 1px grey' }}><strong>Rej Qty</strong></TableCell>
                {defects.map((defect, index) => (
                  <TableCell key={index}><strong>{defect}</strong></TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.inspectionModule}</TableCell>
                  <TableCell>{row.partNo}</TableCell>
                  <TableCell>{row.itemCode}</TableCell>
                  <TableCell>{row.inspQty}</TableCell>
                  <TableCell>{row.okQty}</TableCell>
                  <TableCell sx={{ borderRight: 'solid 1px grey' }}>{row.rejQty}</TableCell>
                  {defects.map((defect, i) => (
                    <TableCell key={i}>{row.defects[defect] || 0}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
}
