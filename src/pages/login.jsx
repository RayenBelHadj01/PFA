import React, { useState } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import fondo from '../assets/images/fondo.png';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  container: {
    opacity: '0.95',
    height: '60%',
    marginTop: '5%', // Update spacing value here
    '@media (max-width: 400px)': {
      marginTop: 0,
      width: '100%',
      height: '100%',
    },
  },
  div: {
    marginTop: '2rem', // Update spacing value here
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '1rem', // Update spacing value here
    backgroundColor: 'primary',
  },
  form: {
    width: '100%',
    marginTop: '1rem', // Update spacing value here
    marginBottom:'1rem'
  }
  
});

export default function Login() {
  const [body, setBody] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (body.email.trim() === '' || body.password.trim() === '') {
      setError(true);
      return;
    }

    console.log(body);
    setError(false);
    
    const { password } = body;
    if (password === 'admin123') {
      navigate('/Adpj');
    } else if (password === 'manager123') {
      navigate('/mgrpj');
    } else {
      navigate('/Uspj');
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container component={Paper} elevation={5} maxWidth="xs" className={classes.container}>
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Email"
              name="email"
              value={body.email}
              onChange={handleChange}
              error={error && body.email.trim() === ''}
              helperText={error && body.email.trim() === '' && 'Email is required'}
            />
            <TextField
              fullWidth
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              name="password"
              value={body.password}
              onChange={handleChange}
              error={error && body.password.trim() === ''}
              helperText={error && body.password.trim() === '' && 'Password is required'}
            />
            <br></br>
            <br></br>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              margintop='1rem'
              className={classes.button}
              onClick={onSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
