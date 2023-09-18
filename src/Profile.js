import React from 'react';
import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Item from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function Profile() {
  return (
    <Grid Container style={{alignContent:"center", backgroundColor: " #007791"}} 
    justifyContent= " center" alignItems="center"  >
  
    <Grid item  elevation={6} square >
      <Paper>
    <Box >
    <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
              <Typography variant="body1">Item 1</Typography>
              <Typography variant="body1">Item 2</Typography>
              <Typography variant="body1">Long content</Typography>
            </Stack>
    </Box>
  </Paper>
    </Grid>
    
    
  </Grid>
    
  );
}

export default Profile;
