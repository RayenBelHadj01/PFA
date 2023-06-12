import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../../Components/Navbar';
import Box from '@mui/material/Box';
import { Typography, IconButton, Button, Grid } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import UserPop from '../../Components/UserPop';

export default function User() {
  const [rows, setRows] = useState([
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
      Action: 'active',
    },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      age: 42,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      age: 45,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 4,
      lastName: 'Stark',
      firstName: 'Arya',
      age: 16,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      age: null,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 6,
      lastName: 'Melisandre',
      firstName: null,
      age: 150,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      age: 44,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      age: 36,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
    {
      id: 9,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      email: 'aa@gmail.com',
      Password: 'aaaa',
      Role: 'Manager',
    },
  ]);

  const handleToggleLock = (id) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        const locked = !row.locked;
        console.log(`Row ID ${id} is now ${locked ? 'locked' : 'unlocked'}`);
        return { ...row, locked };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const [openPopup, setOpenPopup] = useState(false);
  const handleAddUserClick = () => {
    setOpenPopup(true);
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Box height={30}></Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <br></br>
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: 'center', mt: 3, mb: 3 }}
          >
            Manage Users
          </Typography>

          <Button
            sx={{ marginLeft: '42%', marginBottom: '2%' }}
            variant="contained"
            color="success"
            startIcon={<PersonAddAlt1Icon />}
            onClick={handleAddUserClick}
          >
            Add New User
          </Button>

          <Grid container spacing={2}>
            {rows.map((row) => (
              <Grid item key={row.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {row.fullName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Last Name:</strong> {row.lastName}
                      <br />
                      <strong>First Name:</strong> {row.firstName}
                      <br />
                      <strong>Email:</strong> {row.email}
                      <br />
                      <strong>Password:</strong> {row.Password}
                      <br />
                      <strong>Role:</strong> {row.Role}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      onClick={() => handleToggleLock(row.id)}
                      style={{ color: row.locked ? 'red' : 'green' }}
                    >
                      {row.locked ? <LockIcon /> : <LockOpenIcon />}
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <UserPop open={openPopup} onClose={handleClosePopup} />
    </div>
  );
}
