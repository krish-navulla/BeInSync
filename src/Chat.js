
import React, { useEffect, useRef, useState } from 'react';
// import './Chat.css';
import Message from './Message';
import { getFirestore, orderBy } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, limit, addDoc } from 'firebase/firestore';
import { Box, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { where } from 'firebase/firestore';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
 
import { styled } from '@mui/material/styles';

import  app from './firebase';


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




// const Item = styled('div')(({ theme }) => ({
//     width: '100%',
//     height: 30,
//     left: "-50",
//     position: 'relative',
//     backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     borderRadius: 0,
//   }));



function Chat() {
    // const scroll = useRef();
    // const [messages,setMessages] = useState([]);
    // const [user, setUser] = React.useState(null);
    // const [sentMessage, setSentMessage] = React.useState("");

    
    // const matchedEmail = "Krish@gmail.com";

    // const auth = getAuth();
    
    //  onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setUser(user);
    //         console.log("user", user.email);
    //         const getMessages = async() => {

    //             // get all the documents in the 'messages' collection ordered by the 'createdAt' field
    //             const query1 = query(collection(db, 'Chats'), where('to', "==", user.email, "||", 'from', "==", user.email));
    //             const query1Snapshot = await getDocs(query1);
    //             if (!query1Snapshot.empty) {
    //                 setMessages(query1Snapshot.docs.map(doc => doc.data()));
    //             }
    //         }
    //             if (user && messages.length == 0){
    //                 getMessages();
    //             }
    //             console.log("messages", messages);
            
    //     } else {
            
    //     }
    // });

    // const setDocMessage = async () => {
    //     const db = getFirestore(app);
    //     const dbRef = collection(db, 'Chats');

    //     await setDoc(doc(db, "Chats"), {
    //         from: user.email,
    //         to: matchedEmail,
    //         text: sentMessage,
    //         createdAt: serverTimestamp()
    //     });
    //     setSentMessage("");
    //     scroll.current.scrollIntoView({ behavior: 'smooth' })

    // }

    // const handleSendMessage = async () => {
        
    //     setDocMessage();

        
    // }
   
    // const db = getFirestore(app);
    //  useEffect(() => {

    // }, [])

    const scroll = useRef();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = React.useState(null);
  const [sentMessage, setSentMessage] = useState("");
  const [mounted, setMounted] = useState(true);

  const matchedEmail = "Krish@gmail.com";

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => {
      // Cleanup the listener when the component unmounts
      unsubscribe();
    };
  }, [auth]);

  const setDocMessage = async () => {
    const db = getFirestore(app);
    const dbRef = collection(db, 'Chats');

    await addDoc(dbRef, {
      from: user.email,
      to: matchedEmail,
      text: sentMessage,
      createdAt: serverTimestamp(),
    });
    setSentMessage("");
    scroll.current.scrollIntoView({ behavior: 'smooth' });
    // getMessages();
  };



  const handleSendMessage = async () => {
    setDocMessage();
    getMessages();
    
  };


    async function getMessages() {
        console.log("get messages"  );
        const db = getFirestore(app);
        const query1 = query(
            collection(db, 'Chats'),
            orderBy('createdAt', 'desc'),
            limit(100),
          );
        const query1Snapshot = await getDocs(query1);
        const messages = query1Snapshot.docs.map((doc) => doc.data());
        if(mounted){
            setMessages(messages);
        }
        // query1Snapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     setMessages((prevMessages) => [...prevMessages, doc.data()]);

        // }
        // );
        
        console.log("messages", messages);
        // if (!query1Snapshot.empty) {
        //     const newMessages = query1Snapshot.docs.map((doc) => doc.data())
        //     setMessages(newMessages);
        //     console.log("messages", newMessages);
        // }
    };
  

  useEffect(() => {
    if (user && messages.length === 0) {
      
      getMessages();
    }
  }, []);

  return (
    <Box sx={{ width: '100%' , backgroundColor: " #007791"}}>
      {messages
        .filter(({ from, to }) => {
          return (
            (user.email === from && to === matchedEmail) ||
            (user.email === to && from === matchedEmail)
          );
        })
        .reverse()
        .slice(-10)
        .map(({ id, text, from, to, uid, createdAt }, index) => (
          <Box
            key={id}
            sx={{
                width: '20%',
              display: 'inline-flex',
              height: 50,
              position: 'absolute',
              top: 30 + index * 100,
              flexDirection: 'column',
              p: 1,
              m: 1,
              bgcolor: " #007791",
              borderRadius: 1,
            }}
          >
            <Item sx={{width: "100%"}}>{from} : {text}</Item>
            

          </Box>
        ))}
  
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: 130,
          position: 'relative',
          bottom: -1200,
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: "#007791",
          borderRadius: 1,
        }}
      >
        <input
          placeholder="Send a Message"
          value={sentMessage}
          onChange={(e) => setSentMessage(e.target.value)}
          style={{ width: "100%",  padding: '10px', margin: '20px' }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={sentMessage ? handleSendMessage : getMessages}
        >
          Submit
        </button>
      </Box>
      <div style={{backgroundColor: "#007791"}} ref={scroll}></div>
    </Box >
  );
  
}


export default Chat;
