import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../../Components/Navbar';
import Box from '@mui/material/Box';
import { Avatar, AvatarGroup, Button, Grid, Modal } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PopUp from '../../Components/PopUp';

export default function ProjetAdmin() {
  

  const [openPopup, setOpenPopup] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [deleteProject, setDeleteProject] = useState(null);

  const handleDeleteConfirmation = (project) => {
    setDeleteProject(project);
    setOpenDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    // Perform delete operation for deleteProject
    console.log('Deleting project:', deleteProject);

    // Close the delete confirmation popup
    setOpenDeletePopup(false);
    setDeleteProject(null);
  };

  const handleCancelDelete = () => {
    setOpenDeletePopup(false);
    setDeleteProject(null);
  };

  const projects = [
    {
      name: 'Web Application',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      avatars: ['BO', 'MA', 'BO', 'BO'],
    },
    {
      name: 'Mobile Application',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      avatars: ['BO', 'MA', 'BO', 'BO'],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Navbar></Navbar>
      <Box height={30}></Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar></Sidebar>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>

          <Typography variant="h3">Welcome Back Admin</Typography>

          <br />
          <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={() => setOpenPopup(true)}>
            Add New Project
          </Button>
          <Grid container spacing={2} marginTop={10}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                {projects.map((project, index) => (
                  <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        <br />
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack direction="row" spacing={15}>
                        <AvatarGroup max={3}>
                          {project.avatars.map((avatar, avatarIndex) => (
                            <Avatar key={avatarIndex} sx={{ bgcolor: 'success.light' }}>
                              {avatar}
                            </Avatar>
                          ))}
                        </AvatarGroup>
                        <Chip
                          label="Delete"
                          color="error"
                          onClick={() => handleDeleteConfirmation(project.name)}
                          deleteIcon={<DeleteIcon />}
                        />
                      </Stack>
                    </CardActions>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <PopUp openpopup={openPopup} setOpenpopup={setOpenPopup}>
            {/* Add content for Add Project Popup */}
            Add New Project Popup
          </PopUp>

            <Modal open={openDeletePopup} onClose={handleCancelDelete}>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', p: 4 }}>
                {/* Add content for Delete Confirmation Modal */}
                <Typography variant="h6">Are you sure you want to delete the project: {deleteProject}?</Typography>
                <br />
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button variant="outlined" color="error" onClick={handleConfirmDelete}>
                    Confirm
                  </Button>
                  <Button variant="outlined" color="primary" onClick={handleCancelDelete}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Modal>
        </Box>
      </Box>
    </div>
  );
}
