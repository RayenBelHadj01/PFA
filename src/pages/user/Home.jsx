import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Navbar from '../../Components/Navbar';
import Sidebar from './Sidebaruser';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardValue: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2" className={classes.cardTitle}>
                  Total Users
                </Typography>
                <Typography variant="h4" component="p" className={classes.cardValue}>
                  50
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2" className={classes.cardTitle}>
                  Total Projects
                </Typography>
                <Typography variant="h4" component="p" className={classes.cardValue}>
                  20
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2" className={classes.cardTitle}>
                  Task Statistics
                </Typography>
                <Typography variant="h4" component="p" className={classes.cardValue}>
                  Total Tasks: 10
                </Typography>
                <Typography variant="h4" component="p" className={classes.cardValue}>
                  Pending Tasks: 3
                </Typography>
                <Typography variant="h4" component="p" className={classes.cardValue}>
                  In Progress Tasks: 4
                </Typography>
                <Typography variant="h4" component="p" className={classes.cardValue}>
                  Completed Tasks: 3
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
