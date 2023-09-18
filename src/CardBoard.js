import * as React from 'react';
import { Box } from '@mui/material';  // Edited
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper'; // Correct import statement
import './CardBoard.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export default function MultiActionAreaCard({ data, index, name,email,  description, visible, onLike, onDisLike, matched }) {
  const [isHidden, setIsHidden] = React.useState(!visible);

  React.useEffect(() => {
    setIsHidden(!visible);
  }, [visible]);

  const handleSucessClick = () => {
    setIsHidden(true);
    onLike(email);
  };

  const handleRejectClick = () => {
    setIsHidden(true);
    onDisLike();
  };

  return (

  
  <Grid
  width={'100%'}
  Container
  direction="column"
  justifyContent="center"
  alignItems="center"
  square
  spacing={0} padding={1} margin={0}
  style={{ display: isHidden ? 'none' : 'flex', alignContent: "center", backgroundColor: " #007791" }}
><CssBaseline />
  {matched && (
    <Box
    width={'100%'}
    spacing={0} padding={1} margin={0}
    style={{ width: '100%', height: '100%' }}
      sx={{

        position: 'relative',
        width: 600,
        height: 300,
        backgroundColor: '#007755',
        '&:hover': {
          backgroundColor: '#007755',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
     
        <p>You are Matched!</p>
      
    </Box>
  )}

  <Grid 
   width={'100%'}
  spacing={0} padding={1} margin={0}
  direction="column"
  justifyContent="center"
  alignItems="center"
  item elevation={6} square 
  style={{   backgroundColor: " #007791" }} >
    

    {!matched && (
      <Grid
      width={'100%'}
      spacing={0} padding={1} margin={0}
        Container
        square
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          width: "80%",
          height: "50%",
          backgroundColor:  '#007791',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography spacing={0} padding={1} margin={0} gutterBottom variant="h5">
            <Box 
            rowGap={0}
            width={'100%'}
            height={'30%'}
            spacing={0} padding={0} margin={0}
              Container
              square
              direction="row"
              justifyContent="center"
              alignItems="center"
              bgcolor={"#007791"}>
                <Typography width="100%" spacing={0} padding={1} margin={0} variant = "h2" color = "text.primary">
            I am <Typography variant = "h1" color = "#FFFFFF">
             {data.name}
            </Typography>
            </Typography>

            </Box>
            <Box 
            rowGap={0}
            width={'100%'}
            height={'20%'}
            spacing={0} padding={1} margin={0}
              Container
              square
              direction="row"
              justifyContent="center"
              alignItems="center"
              bgcolor={"#007791"}>
                <Typography width="100%" spacing={0} padding={1} margin={0} variant = "h4" color = "text.primary">
                I can help you with <Typography variant = "h3" 
                color = "#FFFFFF">
             {data.skill}
            </Typography>
            </Typography>

            </Box>
            <Box 
            rowGap={0}
            width={'100%'}
            height={'10%'}
            spacing={0} padding={1} margin={0}
              Container
              square
              direction="row"
              justifyContent="center"
              alignItems="center"
              bgcolor={"#007791"}>
                <Typography width="100%"  spacing={0} padding={1} margin={0} variant = "h4" color = "text.primary">
                Guide me in <Typography variant = "h3" color = "#FFFFFF">
             {data.wanttolearn} ?
            </Typography> 
            </Typography>

            </Box>
            <Box
            rowGap={0}
            width={'100%'}
            height={'60%'}
            spacing={0} padding={1} margin={0}
              Container
              square
              direction="row"
              justifyContent="center"
              alignItems="center"
              bgcolor={"#007791"}>
                <Typography  width="100%" spacing={0} padding={1} margin={0} variant = "h4" color = "text.primary">
                Moreover <Typography variant = "h5" color = "#FFFFFF">
             {data["about me"]}
            </Typography>
            </Typography>

            </Box>
        
        </Typography>
        
        
        
      </Grid>
    )}

    {!matched && (
      <Grid
      spacing={0} padding={1} margin={0}

        Container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          width: "80%",
          height: "10%",
          backgroundColor: '#007791',
          '&:hover': {
            backgroundColor: 'primary',
            opacity: 0.5,
          },
        }}
      >
        <div spacing={0} padding={1} margin={0} className="Ellipse1" style={{ width: 75, height: 75, left: -60, top: 60, position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={handleSucessClick}>
            <CheckIcon />
          </Button>
        </div>
        <div spacing={0} padding={1} margin={0} className="Ellipse1" style={{ width: 75, height: 75, left: 60, top: -56, position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={handleRejectClick}>
            <CloseIcon />
          </Button>
        </div>
      </Grid>
    )}
  </Grid>
</Grid>




    
  );
}
