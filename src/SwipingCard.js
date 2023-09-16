import React, { useEffect, useState } from 'react';
import CardBoard from './CardBoard';
import { Card } from '@mui/material';
import app from './firebase';
import { Collections } from '@mui/icons-material';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function SwipingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const [people, setPeople] = useState([
//     {
//       name: 'Elon Musk',
//       description : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa'
//     },
//     {
//       name: 'Jeff Bezos',
//       description : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa'
//     },
//     {
//       name: 'Krishna',
//       description : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa'
//     },
//     {
//       name: 'Vamshi',
//       description : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa'
//     },
//   ]);

const [people, setPeople] = useState([])

  const handleLike = () => {
    
    const i = currentIndex;
    setCurrentIndex(i + 1);
    
  };

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      const db = getFirestore(app);
      const mentors = collection(db, 'Mentors');
      const mentorSnapshot = await getDocs(mentors);
      const mentorList = mentorSnapshot.docs.map(doc => doc.data());
      setPeople(mentorList);
    };

    // Call the async function
    fetchData();
  }, []);
 
    
    
 
  return (
    <div>
      <p></p>

      {people.map((person, index) => (
        <div key={index}>
          <CardBoard
            index={index}
            name={person.name}
            description={person.description}
            visible={index == currentIndex}
            onLike={handleLike}
          />
        </div>
      ))}
    </div>
  );
}

export default SwipingCard;
