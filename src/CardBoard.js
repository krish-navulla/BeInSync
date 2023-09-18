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
  Container
  direction="column"
  justifyContent="center"
  alignItems="center"
  style={{ display: isHidden ? 'none' : 'block', alignContent: "center", backgroundColor: " #007791" }}
><CssBaseline />
  {matched && (
    <Box
    style={{ width: '100%', height: '100%' }}
      sx={{

        position: 'relative',
        width: 700,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: '#007791',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
     
        <p>You are Matched!</p>
      
    </Box>
  )}

  <Grid item elevation={6} square>
    

    {!matched && (
      <Grid
        Container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography gutterBottom variant="h5">
        <Typography variant = "h6" color = "text.primary">
            I am:
            </Typography>{data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography variant = "h6" color = "text.primary">
            I can help you with:
            </Typography>{data.skill}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography variant = "h6" color = "text.primary">
            About Me:
            </Typography>{data["about me"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant = "h6" color = "text.primary">
            Mentor me in:
            </Typography>{data.wanttolearn}
            
        </Typography>
      </Grid>
    )}

    {!matched && (
      <Grid
        Container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          width: 300,
          height: 150,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary',
            opacity: 0.5,
          },
        }}
      >
        <div className="Ellipse1" style={{ width: 75, height: 75, left: -60, top: 60, position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={handleSucessClick}>
            <CheckIcon />
          </Button>
        </div>
        <div className="Ellipse1" style={{ width: 75, height: 75, left: 60, top: -56, position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
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
