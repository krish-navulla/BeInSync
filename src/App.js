import { Box } from '@mui/system';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import Message from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

import { BrowserRouter as Router, Route, Link, Routes, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import SwipingCard from './SwipingCard';



function App() {
  return (
    <BrowserRouter>
      <div class="App">
      
      <header class="App-header">
        
          <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '& > :not(style)': {
            m: 5,
          },
        }}
        >
        <Link to="/profile">
          <PersonIcon />
        </Link>
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/chat">
          <Message />
        </Link>
        </Box>
  
      </header>

      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh', // Adjust the height as needed
          }}
        >
          <div
            style={{
              width: '500px', // Adjust the width as needed
              height: '500px', // Adjust the height as needed
              border: '2px solid #ccc', // Add border styling
              borderRadius: '10px', // Add border radius for a rounded appearance
              overflow: 'hidden', // Hide overflowing content
            }}
          >
            <SwipingCard />
          </div>
        </div>


    

     
    </div>
    </BrowserRouter>
  );
}

export default App;
