'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

export default function AddPartsPage() {
  const [part, setPart] = useState({});
  const [previewOpen, setPreviewOpen] = useState(false);

  const formFields = [
    'customer', 'assyPartNo', 'subAssyPartNo', 'qualityPlanAvailable', 'idA',
    'plugGaugeAvailableA', 'idB', 'plugGaugeAvailableB', 'wallThicknessA', 'wallThicknessB',
    'flareLengthMin', 'endCapLengthMin', 'profileFixtureAvailable', 'hardness',
    'hardnessPinGaugeAvailable', 'notchingRequired', 'notchingToolAvailable',
    'connectorRequired', 'connectorFixtureAvailable', 'oetikerClampRequired',
    'oetikerClampFixture', 'mubeaClamp', 'mubeaClampFixture', 'springBandClamp',
    'heatSinkSleeve', 'assyProfileFixtureAvailable', 'leakageTestingRequired',
    'leakageTestingPerformed', 'leakageFixtureAvailable', 'numLeakageFixtures',
    'cleanlinessMiliporeTest', 'burstReqAvailable', 'pullOutLoad',
    'vacuumTestingRequired', 'vacuumTestingPerformed', 'padPrintingFixture',
    'inspectionModule', 'itemCode'
  ];

  const handleChange = (e) => {
    setPart({ ...part, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return formFields.every(field => (part[field] && part[field].toString().trim() !== ''));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/dashboard/parts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(part),
      });
      if (res.ok) {
        alert('Part added successfully!');
        setPart({});
        setPreviewOpen(false);
      } else {
        alert('Failed to add part');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Add New Part</Typography>
      <Stack spacing={2}>
        {formFields.map((field) => (
          <TextField
            key={field}
            label={field}
            name={field}
            value={part[field] || ''}
            onChange={handleChange}
            fullWidth
            required
          />
        ))}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={() => setPreviewOpen(true)}>
            Preview
          </Button>
          <Button variant="outlined" onClick={() => setPart({})}>Clear</Button>
        </Stack>
      </Stack>

      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>Preview Part Data</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1}>
            {formFields.map((key) => (
              <Typography key={key}><strong>{key}:</strong> {part[key]}</Typography>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}