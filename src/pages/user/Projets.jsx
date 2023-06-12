import React from 'react'
import Sidebar from './Sidebaruser'
import Navbar from '../../Components/Navbar'

import Box from '@mui/material/Box';
import { Avatar, AvatarGroup, Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';



export default function Projets() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <Box height={30}></Box>
      <Box sx={{ display: 'flex' }}>
      
        <Sidebar></Sidebar>
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box component="main"    sx={{flexGrow: 1,p:3}}></Box>

<Typography variant='h3'>Welcome <b>Rayen</b></Typography>
<Typography gutterBottom variant="h5" component="div">
                  These are the projects you're included in. Good Luck
                </Typography>
 <Grid container spacing={2} marginTop={10}>
  <Grid item xs={8}>
  <Stack direction="row" spacing={2}>


  <Card sx={{ maxWidth: 345 }}>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Application
                </Typography>
                
                
                <Typography variant="body2" color="text.secondary">
                <br />
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                    <Button size="small" sx={{marginRight:10}}onClick={()=>(navigate("/Ustask"))} >Consult tasks</Button>
                    <AvatarGroup max={3} >
                      <Avatar sx={{bgcolor:'success.light'}} >BO</Avatar>
                      <Avatar >MA</Avatar>
                      <Avatar >BO</Avatar>
                      <Avatar >BO</Avatar>
                    </AvatarGroup>
                    
                  </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
                  
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mobile Application
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{marginRight:10}}onClick={()=>(navigate("/Tasks"))} >Consult tasks</Button>
                    <AvatarGroup max={3} >
                      <Avatar sx={{bgcolor:'success.light'}} >BO</Avatar>
                      <Avatar >MA</Avatar>
                      <Avatar >BO</Avatar>
                      <Avatar >BO</Avatar>
                    </AvatarGroup>
                    
                  </CardActions>
  </Card>

</Stack>
  </Grid>
  
  
</Grid>


         
      </Box>
      </Box>
        


    </div>
  )
}
