"use client";
import useDefectStore from '../../store/useDefectstore.js';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
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
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';

export default function Defectcheck() {
  // const [okQuantity, setOkQuantity] = useState(0);
  // const [totalChecked, setTotalChecked] = useState(0);
  // const [defectedQuantity, setDefectedQuantity] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const verifiername = searchParams.get('verifiername');
  const checkername = searchParams.get('checkername');
  const partnumber = searchParams.get('partnumber');

  const cancel = searchParams.get('cancel');

    const {
    okQuantity,
    defectedQuantity,
    totalChecked,
    incrementOk,
    incrementDefected,
    incrementTotal,
    decrementDefected,
    decrementTotal,
  } = useDefectStore();

  // useEffect(() => {
  //   if (cancel === 'true') {
  //     decrementTotal();
  //     decrementDefected();
  //   }
  // }, [cancel]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); 

  const handleYes = (e) => {
    e.preventDefault();
    incrementDefected();
    incrementTotal();
    router.push(
      `/defect-type?verifiername=${encodeURIComponent(verifiername)}&checkername=${encodeURIComponent(
        checkername,
      )}&partnumber=${encodeURIComponent(partnumber)}`,
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

  return (
    <Box
      component="main"
      sx={{
        // background:
        //   'linear-gradient(135deg, #e0e7ff 20%, #c7d2fe 90%, #a5b4fc 100%)',
        minHeight: '100vh',
        py: 5,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="md"
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

          <Card
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              bgcolor: 'grey.50',
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
            <TableContainer sx={{ maxWidth: '100%' }}>
              <Table size={isMobile ? 'small' : 'medium'} aria-label="defect summary table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}
                    >
                      Description
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}
                      align="right"
                    >
                      Value
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[['Part Number', partnumber], ['Total Qty Checked', totalChecked.toString()], ['Total OK Qty', okQuantity.toString()], ['Total Defected Qty', defectedQuantity.toString()]].map(
                    ([label, value]) => (
                      <TableRow key={label} hover>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ fontWeight: 600 }}
                        >
                          {label}
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 500 }}>
                          {value}
                        </TableCell>
                      </TableRow>
                    ),
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>

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
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="error"
                size="large"
                onClick={handleYes}
                sx={{
                  minWidth: 140,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  boxShadow:
                    '0 4px 10px rgba(255, 69, 58, 0.4), 0 0 15px rgba(255, 69, 58, 0.3)',
                  '&:hover': {
                    boxShadow:
                      '0 6px 15px rgba(255, 69, 58, 0.6), 0 0 25px rgba(255, 69, 58, 0.4)',
                  },
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                color="success"
                size="large"
                onClick={handleNo}
                sx={{
                  minWidth: 140,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  borderWidth: 2,
                  borderColor: 'success.main',
                  '&:hover': {
                    backgroundColor: 'success.light',
                    borderColor: 'success.dark',
                  },
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                }}
              >
                No
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}