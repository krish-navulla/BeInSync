import React, { useState } from 'react';
//import firebase from 'firebase'; // Import Firebase
import './ProfessionalRegistration.css'; // Import your CSS file if needed

function Professional() {
  // Initialize state for form inputs
  const [name, setName] = useState('');
  const [workExp, setWorkExp] = useState('');
  const [company, setCompany] = useState('');
  const [college, setCollege] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');
  const [password, setPassword] = useState('');
  const [proficientIn, setProficientIn] = useState('');
  const [textFile, setTextFile] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const handleTextFileChange = (e) => {
        const file = e.target.files[0];
        setTextFile(file);
      };

    // try {
    //   // Create a Firestore document with the submitted data
    //   await firebase.firestore().collection('students').add({
    //     name,
    //     number,
    //     company,
    //     interests,
    //   });

    //   // Reset the form
    //   setName('');
    //   setNumber('');
    //   setCompany('');
    //   setInterests('');
    // } catch (error) {
    //   console.error('Error adding document: ', error);
    // }
  };

  const handleTextFileChange = (e) => {
    const file = e.target.files[0];
    setTextFile(file);
  };

  return (
    <div>
      <h1>Professional Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           required />
        </label>

        <label>
          Upload short vedio explaining your skills for Recruiter:
          <input type="file" 
          accept=".mp4" 
          onChange={handleTextFileChange} />
        </label>
        <label>
        College:
          <input type="text" 
           value={college} 
           onChange={(e) => setCollege(e.target.value)} 
           required />
        </label>

        <label>
        Grad Year:
          <input type="text" 
           value={gradYear} 
           onChange={(e) => setGradYear(e.target.value)} 
           required />
        </label>

        <label>
          Work Exp:
          <input type="text" 
           value={workExp} 
           onChange={(e) => setWorkExp(e.target.value)} 
           required />
        </label>
        <label>
          Proficient in :
          <input type="text" 
           value={proficientIn} 
           onChange={(e) => setProficientIn(e.target.value)} 
            />
        </label>
        
        
        
        <label>
          Lokking for(Interests):
          <textarea 
          value={interests} 
          onChange={(e) => setInterests(e.target.value)} />
        </label>
        <label>
          Email<span className="mandatory-indicator">*</span>:
          <input type="text"
           value={email} 
           onChange={(e) => setEmail(e.target.value)}
           required />
        </label>
        <label>
          Password:
          <input type="password" 
           value={password} 
           onChange={(e) => setPassword(e.target.value)}
           required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Professional;