import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Sidebar from './Sidebaruser';
import Navbar from '../../Components/Navbar';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: '10%',
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 150,
    height: 150,
    margin: '0 auto',
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formField: {
    margin: '10%',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  updateButton: {
    marginRight: 10,
  },
});

export default function Profile() {
  const classes = useStyles();

  // Replace with actual user information
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: '********',
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = () => {
    // Perform update logic here
    console.log('Updated user:', user);
  };

  return (
    <>
      <Navbar />
      <Box height={30}></Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Card className={classes.card}>
          <Avatar
            className={classes.avatar}
            alt="User Avatar"
            src="https://example.com/user-avatar.jpg" // Replace with the actual avatar image URL
          />
          <CardContent>
            <Typography variant="h4" className={classes.name}>
              Profile Information
            </Typography>
            <Box className={classes.formContainer}>
              <TextField
                className={classes.formField}
                label="First Name"
                variant="outlined"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
              />
              <TextField
                className={classes.formField}
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
              />
              <TextField
                className={classes.formField}
                label="Email"
                variant="outlined"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
              <TextField
                className={classes.formField}
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
            </Box>
            <Box className={classes.buttonContainer}>
              <Button
                className={classes.updateButton}
                variant="contained"
                color="primary"
                onClick={handleUpdateProfile}
              >
                Update
              </Button>
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
