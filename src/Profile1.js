import React from 'react';
import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Item from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { getFirestore, collection, getDocs, updateDoc } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import app from './firebase';
import { doc } from 'firebase/firestore';

import { useState } from 'react';


function Profile() {
  const [person, setPerson] = React.useState([]);
  const [mounted, setMounted] = React.useState(false);
  const emailLoggedIn = "vnavulla@gmail.com";


  useEffect(() => {
   

    setMounted(true);
    const fetchData = async () => {
        try {
          const db = getFirestore(app);
          const dbRef = collection(db, 'Mentors');
          const query1 = query(dbRef, where("email", "==", emailLoggedIn));
          const querySnapshot = await getDocs(query1);
          if (!querySnapshot.empty) {
            const loggedPerson = querySnapshot.docs[0];
            setPerson(loggedPerson.data());
            console.log("logged Person", loggedPerson.data());
          }
          
          
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
  }, []);

  return (
    <Grid 
    width={"100%"} height={"70%"}
    Container 
    style={{alignContent:"center", backgroundColor: " #007791"}} 
    justifyContent= " center" alignItems="center"  >
  
    <Grid item  elevation={6} square >
      
    <Box sx={{
              
                
                width: '100%',
                height: "100%",
                backgroundColor: '#007780',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  
                },
              }}>
    <Stack style={{ width: "100%", height: "70%" }} 
    spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap"
    sx={{
              
                
      width: '100%',
      height: "100%",
      backgroundColor: '#007780',
      '&:hover': {
        backgroundColor: 'primary.main',
        
      },
    }}>
              <Typography variant="h1" gutterBottom>{person.name}</Typography>
              <Typography variant="h3" gutterBottom>{person.skill}</Typography>
              <Typography variant="h3" gutterBottom>{person.email}</Typography>
              <Typography variant="h3" gutterBottom>{person["about me"]}</Typography>
              
            </Stack>
    </Box>
  
    </Grid>
    
    
  </Grid>
    
  );
}

export default Profile;
