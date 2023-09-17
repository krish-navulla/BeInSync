import React, { useEffect, useState } from 'react';
import CardBoard from './CardBoard';
import { Card } from '@mui/material';
import app from './firebase';
import { Collections } from '@mui/icons-material';
import { getFirestore, collection, getDocs, updateDoc } from 'firebase/firestore';


// import css
import './SwipingCard.css';
import { doc, arrayUnion, query, where } from 'firebase/firestore';
function SwipingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
const [people, setPeople] = useState([]);
const [mounted, setMounted] = useState(true); // Declare 'mounted' state variable
const emailLoggedIn = "vnavulla@gmail.com";


  const handleLike = (LikedPersonEmail) => {
    console.log('like');
    const i = currentIndex;
    setCurrentIndex(i + 1);


    const setDoc = async () => {
        const db = getFirestore(app);
        const dbRef = collection(db, 'Mentors');
      
        // Construct a query to find the document based on LikedPersonEmail
        const query1 = query(dbRef, where ('email', '==', LikedPersonEmail));
        const querySnapshot = await getDocs(query1);
        console.log(querySnapshot);
        // Check if a document with the specified email exists
        if (!querySnapshot.empty) {
          // Get the reference to the first document (assuming email is unique)
          const LikedPerson = doc(dbRef, querySnapshot.docs[0].id);
      
          // Update the 'likedBy' field of the document\
        await updateDoc(LikedPerson, {
            likedBy: arrayUnion(emailLoggedIn),
          });
      
          console.log('Document successfully updated for LikedPerson!');
        } else {
          console.error('Document with email not found.');
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
    <div className='card' style={{ width: '100%', height: '100%' }}>
      <p>Swipping Card</p>
    
      {people
      .filter(person => person.email !== "vnavulla@gmail.com")
      .map((person, index) => (
        
          <CardBoard
          key={index}
            index={index}
            name={person.name}
            email = {person.email}
            description={person.description}
            visible={index == currentIndex}
            onLike={handleLike}
            onDisLike={handleDisLike}
          />
        
      ))}
    </div>

  );
}

export default SwipingCard;
