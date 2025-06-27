'use client'

import { Box, Stack, Typography, Button, TextField, MenuItem, Select, Grid, Paper } from "@mui/material";
import * as React from 'react';
import ParetoChart from "./Paretochart";
import PieChart from "./pichart";
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
    setTopPartsData(result);
  };

  const handleSubmitTopdefects = async () => {
    if (!fromDatedefects || !toDatedefects) return alert('Please select both dates');
    
    const res = await fetch('/api/manager/topdefects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fromDate: fromDatedefects, toDate: toDatedefects }),
    });
    const result = await res.json();
    setdefectsdata(result);
  };

  const handleDownload = async (chartRef, filename) => {
    if (!chartRef.current) return;
    
    try {
      const dataUrl = await htmlToImage.toPng(chartRef.current);
      if (downloadFormat === 'png') {
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = dataUrl;
        link.click();
      } else {
        const pdf = new jsPDF('l', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${filename}.pdf`);
      }
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '90vh',
        width: '95vw',
        maxWidth: '1800px',
        margin: '0 auto',
        padding: { xs: 2, sm: 3 },
      }}
    >
      <Stack direction="column" spacing={3} sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ 
          color: '#333',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}>
          Parts and Defects Analysis 
        </Typography>

        {/* Top Parts Section */}
        <Paper elevation={3} sx={{ 
          padding: 3, 
          borderRadius: '12px',
          backgroundColor: '#f5fbff'
        }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Top 10 Defective Parts
          </Typography> 
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <TextField
              label="From Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={fromDateParts}
              onChange={(e) => setFromDateParts(e.target.value)}
              sx={{ flex: 1, backgroundColor: 'white' }}
            />
            <TextField
              label="To Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={toDateParts}
              onChange={(e) => setToDateParts(e.target.value)}
              sx={{ flex: 1, backgroundColor: 'white' }}
            />
            <Button 
              variant="contained" 
              onClick={handleSubmitTopParts}
              sx={{ 
                backgroundColor: '#4caf50',
                '&:hover': { backgroundColor: '#3d8b40' }
              }}
            >
              Analyze
            </Button>
            <Select
              size="small"
              value={downloadFormat}
              onChange={(e) => setDownloadFormat(e.target.value)}
              sx={{ minWidth: 120, backgroundColor: 'white' }}
            >
              <MenuItem value="png">PNG</MenuItem>
              <MenuItem value="pdf">PDF</MenuItem>
            </Select>
            <Button 
              variant="contained" 
              onClick={() => handleDownload(chartRef, 'top-parts-analysis')}
              sx={{ backgroundColor: '#2196f3' }}
            >
              Export
            </Button>
          </Stack>
        
        {/* part and defects charts */}
          <Box ref={chartRef} sx={{ 
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', lg: 'row' }
          }}>
            <Box sx={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
              minHeight: '300px'
            }}>
              <ParetoChart dataPoints={topPartsData} title="Defect Frequency " />
            </Box>
            <Box sx={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
              minHeight: '300px'
            }}>
              <PieChart dataPoints={topPartsData} title="Defect Distribution" />
            </Box>
          </Box>
        </Paper>

        {/* Top Defects Section */}
        <Paper elevation={3} sx={{ 
          padding: 3, 
          borderRadius: '12px',
          backgroundColor: '#f5fbff'
        }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Top 10 Defect Types
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <TextField
              label="From Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={fromDatedefects}
              onChange={(e) => setfromDatedefects(e.target.value)}
              sx={{ flex: 1, backgroundColor: 'white' }}
            />
            <TextField
              label="To Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={toDatedefects}
              onChange={(e) => settoDatedefects(e.target.value)}
              sx={{ flex: 1, backgroundColor: 'white' }}
            />
            <Button 
              variant="contained" 
              onClick={handleSubmitTopdefects}
              sx={{ 
                backgroundColor: '#4caf50',
                '&:hover': { backgroundColor: '#3d8b40' }
              }}
            >
              Analyze
            </Button>
            <Select
              size="small"
              value={downloadFormat}
              onChange={(e) => setDownloadFormat(e.target.value)}
              sx={{ minWidth: 120, backgroundColor: 'white' }}
            >
              <MenuItem value="png">PNG</MenuItem>
              <MenuItem value="pdf">PDF</MenuItem>
            </Select>
            <Button 
              variant="contained" 
              onClick={() => handleDownload(defectChartRef, 'top-defects-analysis')}
              sx={{ backgroundColor: '#2196f3' }}
            >
              Export
            </Button>
          </Stack>

          <Box ref={defectChartRef} sx={{ 
            display: 'flex',
            gap: 3,
            flexDirection: { xs: 'column', lg: 'row' }
          }}>
            <Box sx={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
              minHeight: '400px'
            }}>
              <ParetoChart dataPoints={topDefectsdata} title="Defect Frequency" />
            </Box>
            <Box sx={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
              minHeight: '400px'
            }}>
              <PieChart dataPoints={topDefectsdata} title="Defect Type Distribution" />
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
}
