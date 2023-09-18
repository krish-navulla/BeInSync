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

export default function MultiActionAreaCard({ index, name,email,  description, visible, onLike, onDisLike, matched }) {
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
//    <div className="cardboard-container" style={{ display: isHidden ? 'none' : 'block' }}>
      
//         {matched && (
//         <div className="alert alert-primary d-flex align-items-center" role="alert" style={{ width: '50%', height: '50%' }}>
//         <p>
//             You are Matched!
//         </p>
//         </div>)}
        
//         {!matched &&( 
//         <CardActionArea style={{width: "100%", height: "100%"}}>
        
          
          
//           <CardContent style={{width: 300, height: 550}}>
          
//             <Typography gutterBottom variant="h5" >
//               {name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {email}
//             </Typography>
            
//               <Typography variant="body2" color="text.secondary">
//                 {description}
//               </Typography>
            
//           </CardContent>
          
//         </CardActionArea >
//         )}
//         {!matched &&( 
//         <CardActions style={{width: 50, height: 53}}>
          
//             <div className="Ellipse1" style={{width: 75, height: 75, left: 100, top: 730, position:"absolute", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} >
//             <Button size="tiny" color="primary" onClick={handleSucessClick}>
//               <CheckIcon />
//             </Button>
//             </div>
//             <div className="Ellipse1" style={{width: 75, height: 75, left: 200, top: 730,position:"absolute" , background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} >
//             <Button size="tiny" color="primary" onClick={handleRejectClick}>
//               <CloseIcon />
//             </Button>
//             </div>
          
//         </CardActions>
//         )}
      
//       </div>

<div className="login-custom">
  <Grid item  component="main" spacing={0} padding={0} margin={0} justifyContent={"center"} alignItems={"center"} 
  style={{ display: isHidden ? 'none' : 'block' }}>
    <CssBaseline />
    {matched && (
        <div className="alert alert-primary d-flex align-items-center" role="alert" style={{ width: '50%', height: '50%' }}>
        <p>
            You are Matched!
        </p>
        </div>)}
    {!matched &&( 
        
            <Box
              sx={{
                
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
          
            <Typography gutterBottom variant="h5" >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
         </Box>
        )}

        {!matched &&( 
        
          <Box
          padding={0}
              sx={{
                
                width: 300,
                height: 150,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: 0.5,
                },
              }}
            >
            <div className="Ellipse1" style={{width: 75, height: 75, left: -60, top: 60,position:"relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} >
            <Button size="tiny" color="primary" onClick={handleSucessClick}>
              <CheckIcon />
            </Button>
            </div>
            <div className="Ellipse1" style={{width: 75, height: 75, left: 60, top: -56,position:"relative" , background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} >
            <Button size="tiny" color="primary" onClick={handleRejectClick}>
              <CloseIcon />
            </Button>
            </div>
            </Box>
          
        
        )}




    
  </Grid>
</div>

    
  );
}
