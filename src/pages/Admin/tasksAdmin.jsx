import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../../Components/Navbar';
import Box from '@mui/material/Box';
import { Container, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, FormControl, Select, MenuItem, Button, IconButton, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import InfoIcon from '@mui/icons-material/Info';

const initialTasks = [
  {
    id: 1,
    projectId: '12345',
    description: 'Task 1 description',
    assigned: ['User 1', 'User 2'],
    state: 'Pending',
  },
  {
    id: 2,
    projectId: '54321',
    description: 'Task 2 description',
    assigned: ['User 3', 'User 4'],
    state: 'In Progress',
  },
  {
    id: 3,
    projectId: '98765',
    description: 'Task 3 description',
    assigned: ['User 5', 'User 6'],
    state: 'Done',
  },
];

const stateOptions = [
  { value: 'To Do', label: 'To Do', className: 'todo' },
  { value: 'Done', label: 'Done', className: 'done' },
  { value: 'Pending', label: 'Pending', className: 'pending' },
];

const useStyles = makeStyles({
  todo: {
    backgroundColor: '#ffb300',
    borderRadius: '5px',
    color: '#FFFFFF',
  },
  done: {
    backgroundColor: '#43a047',
    borderRadius: '5px',
    color: '#FFFFFF',
  },
  pending: {
    backgroundColor: '#d32f2f ',
    borderRadius: '5px',
    color: '#FFFFFF',
  },
  actionButton: {
    width: '30px',
    height: '30px',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    borderRadius: '5px',
    padding: '20px',
    border: '1px solid #000000',
  },
  fieldContainer: {
    marginBottom: '10px',
    border: '1px solid #000000',
    borderRadius: '5px',
    padding: '10px',
  },
  fieldLabel: {
    fontWeight: 'bold',
  },
});

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const handleStateChange = (event, taskId) => {
    const selectedState = event.target.value;
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, state: selectedState };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSave = (taskId) => {
    // Add your logic here to update the data
    console.log(`Save button clicked for Task ID: ${taskId}`);
  };

  const handleDetails = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              These Are The Existing Tasks 
            </Typography>
            <Paper elevation={3} >
              <Box p={3}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Project ID</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Assigned</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tasks.map((task) => (
                        <TableRow key={task.id}>
                          <TableCell>{task.id}</TableCell>
                          <TableCell>{task.projectId}</TableCell>
                          <TableCell>{task.description}</TableCell>
                          <TableCell>{task.assigned.join(', ')}</TableCell>
                          <TableCell>
                            <FormControl>
                              <Select
                                labelId={`state-label-${task.id}`}
                                id={`state-select-${task.id}`}
                                value={task.state}
                                onChange={(event) => handleStateChange(event, task.id)}
                                sx={{
                                  minWidth: '100px',
                                  height: '20px',
                                }}
                                className={classes[task.state.toLowerCase()]}
                              >
                                {stateOptions.map((option) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                    className={classes[option.className]}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </TableCell>
                          <TableCell>
                            <Button
                              
                              color="primary"
                              size="small"
                              startIcon={<SaveAltIcon />}
                              onClick={() => handleSave(task.id)}
                              className={classes.actionButton}
                            >
                              
                            </Button>
                            <IconButton
                              color="primary"
                              size="small"
                              onClick={() => handleDetails(task)}
                              className={classes.actionButton}
                            >
                              <InfoIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box className={classes.modal}>
          <Typography variant="h6" gutterBottom>
            Task Details
          </Typography>
          {selectedTask && (
            <div>
              <div className={classes.fieldContainer}>
                <Typography variant="body1" className={classes.fieldLabel}>
                  ID:
                </Typography>
                <Typography variant="body1">
                  {selectedTask.id}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="body1" className={classes.fieldLabel}>
                  Project ID:
                </Typography>
                <Typography variant="body1">
                  {selectedTask.projectId}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="body1" className={classes.fieldLabel}>
                  Description:
                </Typography>
                <Typography variant="body1">
                  {selectedTask.description}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="body1" className={classes.fieldLabel}>
                  Assigned:
                </Typography>
                <Typography variant="body1">
                  {selectedTask.assigned.join(', ')}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="body1" className={classes.fieldLabel}>
                  State:
                </Typography>
                <Typography variant="body1">
                  {selectedTask.state}
                </Typography>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
