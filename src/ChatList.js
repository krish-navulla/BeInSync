import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import Message from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

import { Person, Router } from '@mui/icons-material';
import { BrowserRouter, Link, Navigate, Route, useNavigate } from 'react-router-dom';
import app from './firebase';
import {Grid, Card, CardContent} from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import Chat from './Chat';


import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


function Item(props) {
    const { sx, ...other } = props;


    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };





function ChatList() {
    const navigate = useNavigate();
    const [mounted, setMounted] = React.useState(false);
    const [matchedProfiles, setMatchedProfiles] = React.useState([]);
    // const emailLoggedIn = "vnavulla@gmail.com";
    const [emailLoggedIn, setEmailLoggedIn] = useState("");
    const [userEmail, setUser] = useState(null);

    
    const auth = getAuth();

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user.email);
              console.log("User is signed in", userEmail);
              
            }
          });

        setMounted(true);
        const db = getFirestore(app);
        const dbRef = collection(db, 'Mentors');
          
        const fetchData = async () => {
            try {

                

                // Remove the where clause to get all documents for the logged-in user
                const query1 = query(dbRef, where("matched", "==", userEmail));
                const querySnapshot1 = await getDocs(query1);
                console.log("querySnapshot1", querySnapshot1.empty);
    
                if (!querySnapshot1.empty) {
                    const fetchedProfiles = [];
                    
                    querySnapshot1.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        fetchedProfiles.push(doc.data());
                    });
    
                    setMatchedProfiles(fetchedProfiles);
                    console.log("matchedProfiles", fetchedProfiles);
                } else {
                    console.error('No matches found.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    
        return () => {
            // Cleanup the listener when the component unmounts
            unsubscribe();
          };
    }, []);
    

    const handleChatPage = (name, email) => {
        console.log("Chat Page");
        // Navigate to the chat page with name and email as route parameters
        navigate(`/chat/${name}/${email}`);
    };

    return (
        <Box justifyContent="center" alignItems="center" sx={{width: '100%', backgroundColor: "#007791" }}>
            {matchedProfiles.map(({ id, name, email }, index) => (
                <Box
                    key={id}
                    sx={{
                        width: '20%',
                        display: 'inline-flex',
                        height: 50,
                        position: 'relative',
                        top: 30 + index * 100,
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        bgcolor: "#007791",
                        borderRadius: 1,
                    }}
                >
                    <Item sx={{ width: "100%" }}>{name} : {email}</Item>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => handleChatPage(name, email)}
                    >
                        Chat
                    </button>
                </Box>
            ))}
        </Box>
    );
}

export default ChatList;
