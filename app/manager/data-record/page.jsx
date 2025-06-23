'use client'
import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, TextField, MenuItem, TableContainer, Select, TableHead, TableRow, TableCell, TableBody, Table, Card } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Icon from '@mdi/react';
import { mdiMicrosoftExcel } from '@mdi/js';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export default function () {
  const [defects, setDefects] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchDefects = async () => {
      try {
        const res = await fetch('/api/dashboard/defects');
        const data = await res.json();

        // Only store the 'defect' field
        const defectNames = data.map(d => d.defect);
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

    // 2. Bold headers with styling
    worksheet.getRow(1).eachCell((cell, colNumber) => {
      
      const headerText = cell.value; 

      cell.font = { bold: true };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb: headerText === 'Rej Qty' ? 'FFFF0000' : '68bced', // Red for Rej Qty, sky blue for others
        },
      };
      cell.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // 3. Add data
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

    // 4. Freeze first row and first 8 columns
    worksheet.views = [
      {
        state: 'frozen',
        xSplit: 8,
        ySplit: 1
      }
    ];

    // 5. Generate and download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    saveAs(blob, `entry-records-${new Date().toISOString().slice(0, 10)}.xlsx`);

  };


  return (
    <Box sx={{
      marginTop: '2%'
    }}>
      <Stack spacing={4}>
        <Stack direction={'row'} alignItems={'flex'} justifyContent={'flex-start'}>
          <Typography variant='h5'> Entry Summary</Typography>
        </Stack>
        <Stack direction={'row'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={10} sx={{
          border: '1px solid grey',
          padding: '1%',
          backgroundColor: '#100F33',
        }}>
          <Typography variant="caption" sx={{
            color: 'white'
          }}><strong>Entry summary</strong></Typography>
          <TextField
            label="From"
            type="date"
            size="small"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}   // <-- Add this here
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
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{ shrink: true }}   // <-- Add this here
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


          <Button variant="contained" color="primary" size="small" onClick={handleSubmit} sx={{
            textTransform: 'none'
          }}>
            Submit
          </Button>

          <Button
            variant="outlined"
            size="medium"
            onClick={downloadExcel}
            sx={{
              backgroundColor: 'green',
              borderColor: 'white',
              textTransform: 'none'
            }}
            startIcon={
              <Icon path={mdiMicrosoftExcel} size={1} color={'white'} />
            }
          >
          </Button>


          {/* <Button variant="outlined" size="medium" sx={{ color: 'white', backgroundColor: 'red', borderColor: 'white', textTransform: 'none' }}>
            <PictureAsPdfIcon />
          </Button> */}


        </Stack>
        <TableContainer sx={{ width: '100%' }}>
          <Table size='medium' sx={{
            '& .MuiTableCell-root': {
              py: 0.2, px: 1.5, fontSize: 12, minWidth: '150', whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }
          }}>
            <TableHead>
              <TableRow>
                <TableCell><strong> Date </strong></TableCell>
                <TableCell><strong> Month</strong> </TableCell>
                <TableCell><strong> Inspection Module </strong></TableCell>
                <TableCell><strong> Part No. </strong></TableCell>
                <TableCell><strong> Item Code </strong></TableCell>
                <TableCell><strong> Insp. Qty </strong></TableCell>
                <TableCell><strong> Ok Qty </strong></TableCell>
                <TableCell sx={{ borderRight: 'solid 1px grey' }}><strong>Rej Qty </strong></TableCell>
                {defects.map((defect, index) => (
                  <TableCell key={index}>
                    <strong>{defect}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
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
  )
}