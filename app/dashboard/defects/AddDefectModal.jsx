'use client'
import { Modal, Box, Typography, TextField, Button, Stack } from '@mui/material'
import { useState } from 'react'

export default function AddDefectModal({ open, handleClose, refresh }) {
  const [formData, setFormData] = useState({
    defectcode: '',
    defect: ''
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const res = await fetch('/api/dashboard/defects', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      refresh()
      handleClose()
      setFormData({ defectcode: '', defect: '' })
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 24
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6">Add New Defect</Typography>
          <TextField
            label="Defect Code"
            name="defectcode"
            fullWidth
            value={formData.defectcode}
            onChange={handleChange}
          />
          <TextField
            label="Defect"
            name="defect"
            fullWidth
            value={formData.defect}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
