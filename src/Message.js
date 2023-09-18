



import React, { useState } from 'react'
// import './SendMessages.css'
import  app  from './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Input, Button } from '@mui/material'
import { getFirestore, collection, getDocs } from 'firebase/firestore'





function Message({scroll}) {
    const [msg, setMsg] = useState('')
    const [user, setUser] = React.useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            console.log("User is signed in");
        } else {
            console.log("User is signed out");
        }
    });

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = user

        const db = getFirestore(app);
        const dbRef = collection(db, 'Chats');
        const messages = await getDocs(dbRef);
        console.log("messages", messages);


        // await db.collection('messages').add({
        //     text: msg,
        //     photoURL,
        //     uid,
            
        // })
        // setMsg('')
        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} 
                    placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default Message
