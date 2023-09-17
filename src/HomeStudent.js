import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/system';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import Message from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import SwipingCard from './SwipingCard';
import Profile from './Profile';



const HomeStudent = () => {
    return (
        <div>
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
      
      <Link to = "/Profile">
        <PersonIcon sx={{ fontSize: 40 }} />
      </Link>
      <Link to = "/">
        <HomeIcon sx={{ fontSize: 40 }} />
      </Link>
      <Link to = "/Profile">
        <Message sx={{ fontSize: 40 }} />
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
            width: '1000px', // Adjust the width as needed
            height: '1000px', // Adjust the height as needed
            border: '2px solid #ccc', // Add border styling
            borderRadius: '10px', // Add border radius for a rounded appearance
            overflow: 'hidden', // Hide overflowing content
          }}
        >
          
        </div>
      </div>
        </div>
    );
}

export default HomeStudent;
