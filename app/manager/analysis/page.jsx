'use client'

import { Box, Stack, Typography, Button, TextField, MenuItem, Select, Grid, Paper } from "@mui/material";
import * as React from 'react';
import ParetoChart from "./Paretochart";
import { useRef, useState } from "react";
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

export default function SelectionPanel() {
  const [topPartsData, setTopPartsData] = useState([]);
  const [fromDateParts, setFromDateParts] = useState('');
  const [toDateParts, setToDateParts] = useState('');
  const [downloadFormat, setDownloadFormat] = useState('png');
  const chartRef = useRef(null);
  const defectChartRef = useRef(null);
  const [topDefectsdata, setdefectsdata] = useState([]);
  const [fromDatedefects, setfromDatedefects] = useState('');
  const [toDatedefects, settoDatedefects] = useState('');

  const handleSubmitTopParts = async () => {
    if (!fromDateParts || !toDateParts) return alert('Please select both dates');

    const res = await fetch('/api/manager/topparts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fromDate: fromDateParts, toDate: toDateParts }),
    });

    const result = await res.json();
    console.log("Top Parts Data Response:", result);
    setTopPartsData(result);
  };

  const handleDownload = async () => {
    if (!chartRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(chartRef.current);

      if (downloadFormat === 'png') {
        const link = document.createElement('a');
        link.download = 'top-10-parts.png';
        link.href = dataUrl;
        link.click();
      } else if (downloadFormat === 'pdf') {
        const pdf = new jsPDF('l', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('top-10-parts.pdf');
      }
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleDownloadDefects = async () => {
    if (!defectChartRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(defectChartRef.current);

      if (downloadFormat === 'png') {
        const link = document.createElement('a');
        link.download = 'top-10-defects.png';
        link.href = dataUrl;
        link.click();
      } else if (downloadFormat === 'pdf') {
        const pdf = new jsPDF('l', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('top-10-defects.pdf');
      }
    } catch (error) {
      console.error('Defects download failed:', error);
    }
  };

  const handleSubmitTopdefects = async () => {
    if (!fromDatedefects || !toDatedefects) return alert('Please select both dates');

    const res = await fetch('/api/manager/topdefects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fromDate: fromDatedefects, toDate: toDatedefects }),
    });

    const result = await res.json();
    console.log("Top defects data response", result);
    setdefectsdata(result);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
        width: '100%',
        borderRadius: '12px',
        boxShadow: 4,
        padding: { xs: 2, sm: 3 }, // Responsive padding
      }}
    >
      <Stack direction={'column'} spacing={5} width={{ xs: '90%', sm: '80%', md: '70%', lg: '60%' }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
          Parts and Defects Analysis
        </Typography>

        {/* Top Parts Section */}
        <Grid container spacing={5} sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: '12px', backgroundColor: '#100F33' }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}><strong>Top 10 Parts</strong></Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                <TextField
                  label="From"
                  type="date"
                  size="small"
                  InputLabelProps={{ 
                    shrink: true,
                    style: { color: 'red', fontWeight: 'bold' } 
                  }}
                  value={fromDateParts}
                  onChange={(e) => setFromDateParts(e.target.value)}
                  sx={{
                    backgroundColor: '#f5f5f5', 
                    '& input': { color: '#000' },
                    '& label': { color: '#fff' }, 
                    borderRadius: '4px',
                    flexGrow: 1, // Allow to grow
                  }}
                />
                <TextField
                  label="To"
                  type="date"
                  size="small"
                  InputLabelProps={{ 
                    shrink: true,
                    style: { color: 'red', fontWeight: 'bold' }
                  }}
                  value={toDateParts}
                  onChange={(e) => setToDateParts(e.target.value)}
                  sx={{
                    backgroundColor: '#f5f5f5', 
                    '& input': { color: '#000' },
                    '& label': { color: '#fff' },
                    borderRadius: '4px',
                    flexGrow: 1, // Allow to grow
                  }}
                />
                <Button variant="contained" color="primary" size="small" onClick={handleSubmitTopParts}>
                  Submit
                </Button>
                <Select
                  size="small"
                  value={downloadFormat}
                  onChange={(e) => setDownloadFormat(e.target.value)}
                  sx={{
                    backgroundColor: '#fff',
                    color: '#000',
                    minWidth: '160px',
                    borderRadius: '4px',
                  }}
                >
                  <MenuItem value="png">Download PNG</MenuItem>
                  <MenuItem value="pdf">Download PDF</MenuItem>
                </Select>
                <Button variant="outlined" color="secondary" size="small" onClick={handleDownload} sx={{ border: '1px solid #fff', color: '#fff' }}>
                  Download
                </Button>
              </Stack>
              <Box ref={chartRef} sx={{ mt: 2, backgroundColor: '#fff', padding: 0.5, borderRadius: '5px' }}>
                <ParetoChart dataPoints={topPartsData} />
              </Box>
            </Paper>
          </Grid>

          {/* Top Defects Section */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: '12px', backgroundColor: '#100F33' }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}><strong>Top 10 Defects</strong></Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                <TextField
                  label="From"
                  type="date"
                  size="small"
                  InputLabelProps={{ 
                    shrink: true,
                    style: { color: 'red', fontWeight: 'bold' }
                  }}
                  value={fromDatedefects}
                  onChange={(e) => setfromDatedefects(e.target.value)}
                  sx={{
                    backgroundColor: '#f5f5f5', 
                    '& input': { color: '#000' },
                    '& label': { color: '#fff' }, 
                    borderRadius: '4px',
                    flexGrow: 1, // Allow to grow
                  }}
                />
                <TextField
                  label="To"
                  type="date"
                  size="small"
                  InputLabelProps={{ 
                    shrink: true,
                    style: { color: 'red', fontWeight: 'bold' } 
                  }}
                  value={toDatedefects}
                  onChange={(e) => settoDatedefects(e.target.value)}
                  sx={{
                    backgroundColor: '#f5f5f5', 
                    '& input': { color: '#000' },
                    '& label': { color: '#fff' }, 
                    borderRadius: '4px',
                    flexGrow: 1, // Allow to grow
                  }}
                />
                <Button variant="contained" color="primary" size="small" onClick={handleSubmitTopdefects}>
                  Submit
                </Button>
                <Select
                  size="small"
                  value={downloadFormat}
                  onChange={(e) => setDownloadFormat(e.target.value)}
                  sx={{
                    backgroundColor: '#fff',
                    color: '#000',
                    minWidth: '160px',
                    borderRadius: '4px',
                  }}
                >
                  <MenuItem value="png">Download PNG</MenuItem>
                  <MenuItem value="pdf">Download PDF</MenuItem>
                </Select>
                <Button variant="outlined" color="primary" size="small" onClick={handleDownloadDefects} sx={{ border: '1px solid #fff', color: '#fff' }}>
                  Download
                </Button>
              </Stack>
              <Box ref={defectChartRef} sx={{ mt: 2, backgroundColor: '#fff', padding: 0.5, borderRadius: '5px' }}>
                <ParetoChart dataPoints={topDefectsdata} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
