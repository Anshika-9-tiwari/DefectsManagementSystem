"use client";

import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function AddUserModal({ open, handleClose, onAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.username && formData.password  && formData.email && formData.role) {
      onAddUser(formData);
      setFormData({ name: '', username: '',password: '',  email: '', role: '' });
      handleClose();
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>Add New User</Typography>
        <Stack spacing={2}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
          <TextField label="Username" name="username" value={formData.username} onChange={handleChange} fullWidth />
          <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
                    <FormControl fullWidth>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              name="role"
              value={formData.role}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value="user">user</MenuItem>
              <MenuItem value="admin">admin</MenuItem>
              <MenuItem value="manager">manager</MenuItem>
              <MenuItem value="supervisor">supervisor</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>Add User</Button>
        </Stack>
      </Box>
    </Modal>
  );
}