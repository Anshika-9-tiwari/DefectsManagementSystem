"use client";
import useDefectStore from '../../store/useDefectstore.js';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Box,
  Container,
  Card,
  Stack,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';

export default function Defectcheck() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const verifiername = searchParams.get('verifiername');
  const checkername = searchParams.get('checkername');
  const partnumber = searchParams.get('partnumber');
  const [part, setParts] = useState(null);

  const {
    okQuantity,
    defectedQuantity,
    totalChecked,
    incrementOk,
    incrementDefected,
    incrementTotal,
  } = useDefectStore();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleYes = (e) => {
    e.preventDefault();
    incrementDefected();
    incrementTotal();
    router.push(
      `/defect-type?verifiername=${encodeURIComponent(verifiername)}&checkername=${encodeURIComponent(
        checkername,
      )}&partnumber=${encodeURIComponent(partnumber)}`
    );
  };

  async function handleNo(e) {
    e.preventDefault();
    incrementOk();
    incrementTotal();

    const defectData = {
      verifiername,
      checkername,
      partnumber,
      defectstatus: 'ok',
      defect: ["None"],
    };

    try {
      await fetch('/api/user/defect-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(defectData),
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchPartByPartnumber = async () => {
      if (!partnumber) return;

      try {
        const res = await fetch(`/api/dashboard/parts?partnumber=${encodeURIComponent(partnumber)}`);
        if (!res.ok) {
          const errorData = await res.json();
          console.error("Failed to fetch part:", errorData?.error || res.status);
          return;
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("No matching part found.");
          return;
        }

        setParts(data[0]);
      } catch (error) {
        console.error("Error fetching part:", error);
      }
    };

    fetchPartByPartnumber();
  }, [partnumber]);

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        py: 5,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 6,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 3, sm: 5, md: 6 },
        }}
      >
        <Stack spacing={4}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            fontWeight={700}
            textAlign="center"
            color="primary.dark"
            sx={{ letterSpacing: 2 }}
          >
            DEFECT ENTRY
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems="stretch"
            width="100%"
          >
            {/* Defect Summary */}
            <Box flex={1}>
              <Card
                elevation={3}
                sx={{
                  width: '100%',
                  p: { xs: 2, sm: 3 },
                  borderRadius: 3,
                  bgcolor: 'grey.50',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={3}
                  sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}
                >
                  Defect Summary
                </Typography>
                <TableContainer>
                  <Table size={isMobile ? 'small' : 'medium'}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        ['Part Number', partnumber],
                        ['Total Qty Checked', totalChecked.toString()],
                        ['Total OK Qty', okQuantity.toString()],
                        ['Total Defected Qty', defectedQuantity.toString()],
                      ].map(([label, value]) => (
                        <TableRow key={label}>
                          <TableCell sx={{ fontWeight: 600 }}>{label}</TableCell>
                          <TableCell align="right">{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Box>

            {/* Part Details */}
            {part && (
              <Box flex={1}>
                <Card
                  elevation={3}
                  sx={{
                    width: '100%',
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'grey.100',
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" fontWeight={700} mb={2}>
                    Part Details
                  </Typography>
                  <TableContainer>
                    <Table size={isMobile ? 'small' : 'medium'}>
                      <TableBody>
                        <TableRow>
                          <TableCell>Customer</TableCell>
                          <TableCell align="right">{part.customer}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sub-Assy Part No</TableCell>
                          <TableCell align="right">{part.subAssyPartNo}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Quality Plan</TableCell>
                          <TableCell align="right">{part.qualityPlanAvailable}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Plug Gauge A</TableCell>
                          <TableCell align="right">{part.plugGaugeAvailableA}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Wall Thickness A</TableCell>
                          <TableCell align="right">{part.wallThicknessA}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Wall Thickness B</TableCell>
                          <TableCell align="right">{part.wallThicknessB}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Flare Length Min</TableCell>
                          <TableCell align="right">{part.flareLengthMin}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </Box>
            )}
          </Stack>

          {/* Action Buttons */}
          <Card
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              bgcolor: 'grey.100',
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={3} color="text.primary" letterSpacing={1.1}>
              Is the part defected?
            </Typography>
            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Link href="/Logentry" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="success" size="large">
                  Go Back
                </Button>
              </Link>
              <Button variant="contained" color="error" size="large" onClick={handleYes}>
                Yes
              </Button>
              <Button variant="outlined" color="success" size="large" onClick={handleNo}>
                No
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
