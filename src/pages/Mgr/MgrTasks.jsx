import React, { useState } from 'react';
import Sidebar from './Sidebarmgr';
import Navbar from '../../Components/Navbar';
import Box from '@mui/material/Box';
import {
  Container,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Modal,
  Button,
  TextField,
  MenuItem
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

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

export default function MgrTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const classes = useStyles();

 

  const handleDetails = (task) => {
    setSelectedTask(task);
    setOpenDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  const handleDeleteConfirmation = (taskId) => {
    setDeleteConfirmation(taskId);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setDeleteConfirmation(null);
  };

  const handleAddTask = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };
  
  const [assignedUsers, setAssignedUsers] = useState([]);

const handleAssignedUsersChange = (event) => {
  setAssignedUsers(event.target.value);
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
              Manage Tasks
            </Typography>
            <Box textAlign="center" marginBottom={2}>
              <Button variant="contained" color="success" onClick={handleAddTask}>
                Add Task
              </Button>
            </Box>
            <Paper elevation={3}>
              <Box p={3}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Project ID</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Assigned</TableCell>
                        <TableCell>Status</TableCell>
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
                          <TableCell>{task.state}</TableCell>
                          <TableCell>
                            <IconButton
                              color="error"
                              size="small"
                              onClick={() => handleDeleteConfirmation(task.id)}
                              className={classes.actionButton}
                            >
                              <DeleteIcon />
                            </IconButton>
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
        <Modal open={openAddModal} onClose={handleCloseAddModal}>
        <Box className={classes.modal}>
          <Typography variant="h6" gutterBottom>
            Add Task
          </Typography>
          <Typography variant="body1" className={classes.fieldLabel}>
            Project:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value="Web application"
            disabled
          />
          <Typography variant="body1" className={classes.fieldLabel}>
            Description:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter task description"
          />
         <Typography variant="body1" className={classes.fieldLabel}>
            Assigned To:
          </Typography>
          <TextField
        fullWidth
        select
        SelectProps={{
          multiple: true,
        }}
        value={assignedUsers}
        onChange={handleAssignedUsersChange}
      >
        <MenuItem value="John Doe">John Doe</MenuItem>
        <MenuItem value="Jane Smith">Jane Smith</MenuItem>
        <MenuItem value="Alice Johnson">Alice Johnson</MenuItem>
        <MenuItem value="Bob Thompson">Bob Thompson</MenuItem>
        </TextField>
          <Typography variant="body1" className={classes.fieldLabel}>
            Status:
          </Typography>
          <TextField
            fullWidth
            select
            variant="outlined"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField>
          <Box textAlign="center" marginTop={2}>
            <Button variant="contained" color="success" onClick={handleCloseAddModal}>
              Save
            </Button>
            <Button variant="contained" color="error" onClick={handleCloseAddModal} style={{ marginLeft: '10px' }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>



      <Modal open={openDetailsModal} onClose={handleCloseDetailsModal}>
        <Box className={classes.modal}>
          <Typography variant="h6" gutterBottom>
            Task Details
          </Typography>
          {selectedTask && (
            <div>
              {/* Display the task details */}
              {/* ... */}
              <Box textAlign="center" marginTop={2}>
                <Button variant="contained" color="error" onClick={handleCloseDetailsModal} style={{ marginLeft: '10px' }}>
                  Close
                </Button>
              </Box>
            </div>
          )}
        </Box>
      </Modal>
      <Modal open={deleteConfirmation !== null} onClose={handleCancelDelete}>
        <Box className={classes.modal}>
          <Typography variant="h6" gutterBottom>
            Confirm Delete
          </Typography>
          {deleteConfirmation && (
            <div>
              <Typography variant="body1">Are you sure you want to delete this task?</Typography>
              <Box textAlign="center" marginTop={2}>
                <Button variant="contained" color="success" onClick={() => handleDelete(deleteConfirmation)}>
                  Confirm
                </Button>
                <Button variant="contained" color="error" onClick={handleCancelDelete} style={{ marginLeft: '10px' }}>
                  Cancel
                </Button>
              </Box>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

