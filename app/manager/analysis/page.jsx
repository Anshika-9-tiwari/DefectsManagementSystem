import { Box, Stack, Typography, Card, Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';


export default function SelectionPanel() {
//   const dataset = [
//   {
//     london: 59,
//     paris: 57,
//     newYork: 86,
//     seoul: 21,
//     month: 'Jan',
//   },
//   {
//     london: 50,
//     paris: 52,
//     newYork: 78,
//     seoul: 28,
//     month: 'Feb',
//   },
//   {
//     london: 47,
//     paris: 53,
//     newYork: 106,
//     seoul: 41,
//     month: 'Mar',
//   },
//   {
//     london: 54,
//     paris: 56,
//     newYork: 92,
//     seoul: 73,
//     month: 'Apr',
//   },
//   {
//     london: 57,
//     paris: 69,
//     newYork: 92,
//     seoul: 99,
//     month: 'May',
//   },
//   {
//     london: 60,
//     paris: 63,
//     newYork: 103,
//     seoul: 144,
//     month: 'June',
//   },
//   {
//     london: 59,
//     paris: 60,
//     newYork: 105,
//     seoul: 319,
//     month: 'July',
//   },
//   {
//     london: 65,
//     paris: 60,
//     newYork: 106,
//     seoul: 249,
//     month: 'Aug',
//   },
//   {
//     london: 51,
//     paris: 51,
//     newYork: 95,
//     seoul: 131,
//     month: 'Sept',
//   },
//   {
//     london: 60,
//     paris: 65,
//     newYork: 97,
//     seoul: 55,
//     month: 'Oct',
//   },
//   {
//     london: 67,
//     paris: 64,
//     newYork: 76,
//     seoul: 48,
//     month: 'Nov',
//   },
//   {
//     london: 61,
//     paris: 70,
//     newYork: 103,
//     seoul: 25,
//     month: 'Dec',
//   },
// ];
//   const chartSetting = {
//   yAxis: [
//     {
//       label: 'rainfall (mm)',
//       width: 60,
//     },
//   ],
//   height: 300,
// };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 1,
        px: 2,
        width: '100%',
      }}
    >
      <Stack direction={'column'} spacing={5} width={'100%'}>
      <Box
        sx={{
          width: '100%',
          padding: 3,
          backgroundColor: '#f9f9f9',
          boxShadow: 6, 
          borderRadius: 3,
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={9} justifyContent="center" alignItems="stretch" sx={{
          
        }}>
          
          
          <Card
            sx={{
              width: { xs: '90%', sm: '60%', md: '15%' },
              minHeight: 'auto',
              p: 1.5,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 12px #100F33',
              border:'1px solid #100F33',
              '&:hover': {
                backgroundColor: '#e3f2fd',
                boxShadow: '0 6px 20px #100F33', 
                transform: 'translateY(-3px)', // lift effect
              },
            }}
          >
            <Button href="#defected-parts" variant="" sx={{textTransform:'none'}}>
                <Stack direction={'row'} spacing={2}>
                    <BuildIcon fontSize="small"/>
                        Top parts
                </Stack>
                
            </Button>
          </Card>

          <Card
            sx={{
              width: { xs: '90%', sm: '60%', md: '15%' },
              border:'1px solid #100F33',
              minHeight: 'auto',
              p: 1.5,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 12px #100F33',
              '&:hover': {
                backgroundColor: '#e3f2fd',
                boxShadow: '0 6px 20px #100F33',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <Button variant="" sx={{textTransform:'none'}}>
                <Stack direction={'row'} spacing={1}>
                <BugReportIcon fontSize="small"/>
               <Typography variant="p">Top defects</Typography>
               </Stack>
            </Button>
          </Card>
          <Card
            sx={{
              width: { xs: '90%', sm: '60%', md: '15%' },
              border:'1px solid #100F33',
              minHeight: 'auto',
              p: 1.5,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 12px #100F33',
              '&:hover': {
                backgroundColor: '#e3f2fd',
                boxShadow: '0 6px 20px #100F33',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <Button variant="" sx={{textTransform:'none'}}>
                <Stack direction={'row'} spacing={1}>
                    <SettingsIcon fontSize="small"/>
                    <Typography variant="p">
                        Parts
                    </Typography>
                </Stack>
            </Button>
          </Card>
            <Card
            sx={{
              width: { xs: '90%', sm: '60%', md: '15%' },
              border:'1px solid #100F33',
              minHeight: 'auto',
              p: 1.5,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 12px #100F33',
              '&:hover': {
                backgroundColor: '#e3f2fd',
                boxShadow: '0 6px 20px #100F33',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <Button variant="" sx={{textTransform:'none'}}>
                <Stack direction={'row'} spacing={1}>
                <ReportIcon fontSize="small"/>
                <Typography variant="p">Defects</Typography>
                </Stack>
            </Button>
          </Card>

        </Stack>
        </Box>
        <Stack width= {'100%'} direction={{md:'row', s:'column'}}>
            <Stack width={'100%'} id = {'top-parts'} direction={'column'} spacing={8}>
                <Stack direction={'row'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={10} sx = {{
                  border: '1px solid grey',
                  padding: '1%',
                  backgroundColor:'#100F33'

                  }}>
                    <Typography variant="h6" sx = {{ 
                      color:'white'
                    }}><strong>Top 10 Parts</strong></Typography>
                    <TextField
                    type="date"
                    size="small"
                    sx={{
                      backgroundColor: '#100F33',
                      '& input': {
                        color: 'white',
                        '&::-webkit-calendar-picker-indicator': {
                          filter: 'invert(1)',
                        },
                      },
                    }}
                  />

                    
                </Stack>
                <Stack direction={'row'} width={'100%'}>
                  <Box flex={1}>
                    {/* <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London',  },
        { dataKey: 'paris', label: 'Paris',  },
        { dataKey: 'newYork', label: 'New York',  },
        { dataKey: 'seoul', label: 'Seoul',  },
      ]}
      {...chartSetting}
    /> */}
    </Box>
    <Box>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={170}
      height={300}
    />
    </Box>
      </Stack>
      <Stack id={'top-defects'} direction={'row'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={10} sx = {{
                  border: '1px solid grey',
                  padding: '1%',
                  backgroundColor:'#100F33'

                  }}>
                    <Typography variant="h6" sx = {{ 
                      color:'white'
                    }}><strong>Top 10 Defects</strong></Typography>
                    <TextField
                    type="date"
                    size="small"
                    sx={{
                      backgroundColor: '#100F33',
                      '& input': {
                        color: 'white',
                        '&::-webkit-calendar-picker-indicator': {
                          filter: 'invert(1)',
                        },
                      },
                    }}
                  />

      </Stack>
      <Stack direction={'row'} width={'100%'}>
      <Box flex={1}>
                            {/* <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London',  },
        { dataKey: 'paris', label: 'Paris',  },
        { dataKey: 'newYork', label: 'New York',  },
        { dataKey: 'seoul', label: 'Seoul',  },
      ]}
      {...chartSetting}
    /> */}
    </Box>
    <Box>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={170}
      height={300}
    />
    </Box>
      </Stack>
            <Stack direction={'row'} id = {'defected-parts'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={10} sx = {{
                  border: '1px solid grey',
                  padding: '1%',
                  backgroundColor:'#100F33'
                  }}>
                    <Typography variant="h6" sx = {{ 
                      color:'white'
                    }}><strong>Defected parts</strong></Typography>
                      {/* Select for part number */}
  <Stack direction="row" spacing={2} alignItems="center">
  <FormControl size="small" sx={{ minWidth: 150 }}>
    <InputLabel sx={{ color: 'white' }}>Part Number</InputLabel>
    <Select
      label="Part Number"
      defaultValue=""
      sx={{
        color: 'white',
        backgroundColor: '#100F33',
        borderColor: 'white',
        '& .MuiSvgIcon-root': {
          color: 'white', // dropdown arrow
        },
      }}
    >
      <MenuItem value={1}>Part 1</MenuItem>
      <MenuItem value={2}>Part 2</MenuItem>
      <MenuItem value={3}>Part 3</MenuItem>
    </Select>
  </FormControl>
                    <TextField
                    type="date"
                    size="small"
                    sx={{
                      backgroundColor: '#100F33',
                      '& input': {
                        color: 'white',
                        // This is the actual calendar icon
                        '&::-webkit-calendar-picker-indicator': {
                          filter: 'invert(1)',
                        },
                      },
                    }}
                  />

                  </Stack>
                  </Stack>
            <Stack direction={'row'} width={'100%'}>
              <Box flex={1}>
              {/* <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London',  },
        { dataKey: 'paris', label: 'Paris',  },
        { dataKey: 'newYork', label: 'New York',  },
        { dataKey: 'seoul', label: 'Seoul',  },
      ]}
      {...chartSetting}
    /> */}
    </Box>
    <Box>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={170}
      height={300}
    />
    </Box>
            </Stack>
                        <Stack direction={'row'} id = {'defect-analysis'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={10} sx = {{
                  border: '1px solid grey',
                  padding: '1%',
                  backgroundColor:'#100F33'
                  }}>
                    <Typography variant="h6" sx = {{ 
                      color:'white'
                    }}><strong>Defect analysis</strong></Typography>
                      {/* Select for part number */}
  <Stack direction="row" spacing={2} alignItems="center">
  <FormControl size="small" sx={{ minWidth: 150 }}>
    <InputLabel sx={{ color: 'white' }}>Defect</InputLabel>
    <Select
      label="Defect"
      defaultValue=""
      sx={{
        color: 'white',
        backgroundColor: '#100F33',
        borderColor: 'white',
        '& .MuiSvgIcon-root': {
          color: 'white', // dropdown arrow
        },
      }}
    >
      <MenuItem value={1}>Defect 1</MenuItem>
      <MenuItem value={2}>Defect 2</MenuItem>
      <MenuItem value={3}>Defect 3</MenuItem>
    </Select>
  </FormControl>
                    <TextField
                    type="date"
                    size="small"
                    sx={{
                      backgroundColor: '#100F33',
                      '& input': {
                        color: 'white',
                        // This is the actual calendar icon
                        '&::-webkit-calendar-picker-indicator': {
                          filter: 'invert(1)',
                        },
                      },
                    }}
                  />

                  </Stack>
                  </Stack>

          <Stack direction={'row'} width={'100%'}>
            <Box flex={1}>
              {/* <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London',  },
        { dataKey: 'paris', label: 'Paris',  },
        { dataKey: 'newYork', label: 'New York',  },
        { dataKey: 'seoul', label: 'Seoul',  },
      ]}
      {...chartSetting}
    /> */}
    </Box>
    <Box>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={170}
      height={300}
    />
    </Box>
            </Stack>
            </Stack>

        </Stack>
        </Stack>

    </Box>
  );
}
