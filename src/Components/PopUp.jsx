import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function PopUp(props) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [projectMembers, setProjectMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleManagerChange = (event) => {
    setProjectManager(event.target.value);
  };

  const handleMembersChange = (event) => {
    setProjectMembers(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsButtonClicked(true);

    if (title.trim() === '' || description.trim() === '' || projectManager === '' || projectMembers.length === 0) {
      setErrorMessage('All fields must be filled');
      return;
    }

    // Rest of the form submission logic

    // Clear the form fields
    setTitle('');
    setDescription('');
    setProjectManager('');
    setProjectMembers([]);
    setIsButtonClicked(false);
    setErrorMessage('');
    console.log(title,description,projectManager,projectMembers);
  };

  const { openpopup, setOpenpopup } = props;

  return (
    <>
      <Dialog open={openpopup} fullWidth maxWidth="md">
        <DialogTitle>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              <b>Add a new Project</b>
            </Typography>
            <Button onClick={() => setOpenpopup(false)} startIcon={<CloseIcon />} color="error"></Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <Typography paragraph>Please fill all the inputs</Typography>
          <Grid>
            <Card style={{ padding: '20px 5px', margin: '0 auto' }}>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        required
                        fullWidth
                        label="Title"
                        variant="outlined"
                        color={isButtonClicked && title.trim() === '' ? 'error' : 'primary'}
                        value={title}
                        onChange={handleTitleChange}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        fullWidth
                        label="Description"
                        variant="outlined"
                        color={isButtonClicked && description.trim() === '' ? 'error' : 'primary'}
                        multiline
                        rows={3}
                        value={description}
                        onChange={handleDescriptionChange}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        fullWidth
                        label="Project Manager"
                        select
                        size="small"
                        color={isButtonClicked && projectManager === '' ? 'error' : 'primary'}
                        helperText="Select Your Project Manager"
                        value={projectManager}
                        onChange={handleManagerChange}
                      >
                        <MenuItem value="">Select Manager</MenuItem>
                        <MenuItem value="US">Mohamed Ben Mohamed</MenuItem>
                        <MenuItem value="AU">Foulen Ben Foulen</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        fullWidth
                        label="Project Members"
                        select
                        SelectProps={{
                          multiple: true,
                        }}
                        size="small"
                        color={isButtonClicked && projectMembers.length === 0 ? 'error' : 'primary'}
                        helperText="Select Your Project Members"
                        value={projectMembers}
                        onChange={handleMembersChange}
                      >
                        <MenuItem value="">Select Members</MenuItem>
                        <MenuItem value="US">Mohamed Ben Mohamed</MenuItem>
                        <MenuItem value="AU">Foulen Ben Foulen</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item>
                      <Box justifyContent="center" alignItems="center">
                        <Button variant="contained" startIcon={<AddIcon />} type="submit">
                          ADD
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                  {errorMessage && (
                    <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                      {errorMessage}
                    </Typography>
                  )}
                </form>
              </CardContent>
            </Card>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
