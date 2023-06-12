import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  InputLabel
} from '@mui/material';

const UserPop = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validation check
    if (!firstName || !lastName || !email || !password || !role) {
      setFormSubmitted(true);
      console.log(firstName,lastName,email,password,role,formSubmitted)
      return;
    }
    // Handle form submission
    
    onClose();
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
      <Typography paragraph>Please fill all the inputs</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            error={formSubmitted && !firstName}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            error={formSubmitted && !lastName}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={formSubmitted && !email}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={formSubmitted && !password}
          />
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId='role-label'
            value={role}
            onChange={handleRoleChange}
            fullWidth
            margin="normal"
            required
            error={formSubmitted && !role}
          >
            <MenuItem value="Member">Member</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </Select>
          {formSubmitted && (!firstName || !lastName || !email || !password || !role) && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              All fields must be filled
            </Typography>
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: (theme) => theme.palette.error.main }}>
          Cancel
        </Button>
        <Button
          type="submit"
          form="userForm"
          sx={{ color: (theme) => theme.palette.success.main }}
          onClick={() => setFormSubmitted(true)}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserPop;
