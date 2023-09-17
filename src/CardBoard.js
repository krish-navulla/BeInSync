import * as React from 'react';
import {Box} from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';


export default function MultiActionAreaCard({index, name, description, visible, onLike, onDislike}) {
  const [isHidden, setIsHidden] = React.useState(!visible);
  
  React.useEffect(() => {
    setIsHidden(!visible);
  }, [visible]);


  const handleSucessClick = () => {
    setIsHidden(true);
    onLike();
  };

    return (
        <div>
    <Paper elevation={3} style={{width: '100%', height: '100%'}}>
    <Card class = "card" style = {{display : isHidden ? 'none' : 'block'}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          {/* Description with scrolling */}
          <div style={{ maxHeight: '100px', overflowY: 'auto', overflowX: 'auto' }}>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '& > :not(style)': {
            m: 1,
          },
        }}
        >
        <Button size="small" color="primary" onClick={handleSucessClick}>
          <CheckIcon />
        </Button>
        <Button size="small" color="primary">
          <CloseIcon />
        </Button>
        <Button size="small" color="primary">
          <CheckIcon />
        </Button>
          
        </Box>
        
      </CardActions>
    </Card>
    </Paper>
    </div>
  );
}
