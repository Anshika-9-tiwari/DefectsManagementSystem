
"use client";
import { Box, Card, Stack, Table, TableCell, TableRow, Paper, TableBody, TableContainer, TableHead, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Defecttype() {
  const [defects, setDefects] = useState([]);
  const [selectedDefectId, setSelectedDefectId] = useState(null);
  const [selectedDefectLabel, setSelectedDefectLabel] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const verifiername = searchParams.get('verifiername');
  const checkername = searchParams.get('checkername');
  const partnumber = searchParams.get('partnumber');

  useEffect(() => {
    const fetchDefects = async () => {
      try {
        const res = await fetch('/api/dashboard/defects'); // your admin route
        const data = await res.json();
        setDefects(data);
      } catch (error) {
        console.error("Error fetching defects:", error);
      }
    };
    fetchDefects();
  }, []);

  const handleSubmit = async () => {
    if (!selectedDefectLabel) return alert("Please select a defect before submitting.");

    const entryData = {
      verifiername,
      checkername,
      partnumber,
      defectstatus: "defect",
      defect: selectedDefectLabel,
    };

    try {
      const res = await fetch('/api/user/defect-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entryData)
      });
      if (res.ok) {
        router.push('/defect-check?verifiername=' + verifiername + '&checkername=' + checkername + '&partnumber=' + partnumber);
      } else {
        console.error("Error submitting entry");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    router.push('/defect-check?verifiername=' + verifiername + '&checkername=' + checkername + '&partnumber=' + partnumber);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight={600} align="center" gutterBottom>
          Select Defect Type
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>S.no</strong></TableCell>
                <TableCell><strong>Defect Code</strong></TableCell>
                <TableCell><strong>Defect</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {defects.map((defect, index) => (
                <TableRow key={defect.id} hover>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{defect.defectcode}</TableCell>
                  <TableCell>{defect.defect}</TableCell>
                  <TableCell>
                    <input
                      type="radio"
                      name="selectedDefect"
                      value={defect.id}
                      onChange={() => {
                        setSelectedDefectId(defect.id);
                        setSelectedDefectLabel(defect.defect);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="outlined" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
