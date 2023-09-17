import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper'; // Correct import statement

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
   
      <Card  style={{ display: isHidden ? 'none' : 'block' , width: '90%', height: '100%'}}>
        {matched && (
        <div className="alert alert-primary d-flex align-items-center" role="alert" style={{ width: '100%', height: '100%' }}>
        <div className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
            <a href="#info-fill"/>
        </div>
        <div>
            You are Matched!
        </div>
        </div>)}
        
        {!matched &&( 
        <CardActionArea>
        
          
          
          <CardContent style={{  width: '100%', height: '100%'}}>
          
            <Typography gutterBottom variant="h5" >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            {/* Description with scrolling */}
            <div style={{ maxHeight: '100px', overflowY: 'auto', overflowX: 'auto' }}>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          </CardContent>
          
        </CardActionArea >
        )}
        {!matched &&( 
        <CardActions style={{  width: '30%', height: '30%'}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              '& > :not(style)': {
                m: 1,
              },
            }}
          >
            <div className="Ellipse1" style={{width: 50, height: 53, left: 124, top: 745, background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} >
            <Button size="tiny" color="primary" onClick={handleSucessClick}>
              <CheckIcon />
            </Button>
            </div>
            <div className="Ellipse1" style={{width: 50, height: 53, left: 124, top: 745, background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} >
            <Button size="tiny" color="primary" onClick={handleRejectClick}>
              <CloseIcon />
            </Button>
            </div>
          </Box>
        </CardActions>
        )}
      </Card>
    
  );
}
