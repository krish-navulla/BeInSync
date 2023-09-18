import React, { useEffect, useState } from 'react';
import CardBoard from './CardBoard';
import { Card } from '@mui/material';
import app from './firebase';
import { Collections } from '@mui/icons-material';
import { getFirestore, collection, getDocs, updateDoc } from 'firebase/firestore';
 
import { Grid } from '@mui/material';




// import css
import './SwipingCard.css';
import { doc, arrayUnion, query, where } from 'firebase/firestore';
function SwipingCard() {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
    const [people, setPeople] = useState([]);
    const [mounted, setMounted] = useState(true); // Declare 'mounted' state variable
    const emailLoggedIn = "Krish@gmail.com";


  const handleLike = (LikedPersonEmail) => {
    console.log('like');
    const i = currentIndex;
    setCurrentIndex(i + 1);


    const setDoc = async () => {
        const db = getFirestore(app);
        const dbRef = collection(db, 'Mentors');
      
        // Construct queries to find the documents based on LikedPersonEmail and emailLoggedIn
        const query1 = query(dbRef, where('email', '==', LikedPersonEmail));
        const query2 = query(dbRef, where('email', '==', emailLoggedIn));
      
        const querySnapshot1 = await getDocs(query1);
        const querySnapshot2 = await getDocs(query2);
      
        // Check if a document with the specified email exists for LikedPerson
        if (!querySnapshot1.empty) {
          // Get the reference to the first document (assuming email is unique)
          const LikedPerson = doc(dbRef, querySnapshot1.docs[0].id);
      
          // Update the 'LikedBy' field of the document with Person A's email
          await updateDoc(LikedPerson, {
            likedBy: arrayUnion(emailLoggedIn),
          });
      
          console.log('Document successfully updated for LikedPerson!');
        } else {
          console.error('Document with email not found for LikedPerson.');
        }
      
        // Check if a document with the specified email exists for emailLoggedIn
        if (!querySnapshot2.empty) {
          // Get the reference to the first document (assuming email is unique)
          const userDoc = querySnapshot2.docs[0];
          const userDocId = userDoc.id;
      
          // Update the 'LikedBy' field of the document with LikedPerson's email
          await updateDoc(doc(dbRef, userDocId), {
            likedBy: arrayUnion(LikedPersonEmail),
          });
      
          console.log('Document successfully updated for emailLoggedIn!');
      
          // Check if mutual liking occurred (both liked each other)
          if (userDoc.data().likedBy.includes(LikedPersonEmail)) {
            // Update the 'Matched' field of both Person A and Person B
            const LikedPerson = doc(dbRef, querySnapshot1.docs[0].id);
            await updateDoc(LikedPerson, {
              matched: arrayUnion(emailLoggedIn),
            });
      
            await updateDoc(doc(dbRef, userDocId), {
              matched: arrayUnion(LikedPersonEmail),
            });
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
              }, 3000);
            console.log('Mutual liking! Matched!');
          }
        } else {
          console.error('Document with email not found for emailLoggedIn.');
        }
      };
      
      setDoc();
      
      
    

  };

  const handleDisLike = () => {
    console.log('dislike');
    const i = currentIndex;
    setCurrentIndex(i + 1);
  };


  useEffect(() => {
   

    setMounted(true);
    const fetchData = async () => {
        try {
            console.log("fetching data");
          const db = getFirestore(app);
          const mentors = collection(db, 'Mentors');
          const mentorSnapshot = await getDocs(mentors);
          const mentorList = mentorSnapshot.docs.map(doc => doc.data());
          console.log(mentorList);
          // Ensure the component is still mounted before updating the state
          if (mounted) {
            setPeople(mentorList);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
  }, []);
 
    
    
 
  return (
    
    <Grid 
  width={'100%'}
  container  
  direction="column"
    justifyContent="center"
  elevation={6} square spacing={0} padding={1} margin={0} 
  style={{alignContent:"center", backgroundColor: " #007700"}}>
        {/* // <div  spacing={0} padding={1} margin={0} style={{ width: "100%", height: "90%", backgroundColor: " #007791"}}> */}
      {people
      .filter(person => person.email !== emailLoggedIn)
      .map((person, index) => (
        
          <CardBoard
          style = {{backgroundColor: " #007755"}}
          key={index}
          data = {person}
            index={index}
            name={person.name}
            email = {person.email}
            description={person.description}
            visible={index == currentIndex}
            onLike={handleLike}
            onDisLike={handleDisLike}
            matched={showSuccessAlert}

            
          />
        
      ))}
      </Grid>
    
    
    

  );
}

export default SwipingCard;
