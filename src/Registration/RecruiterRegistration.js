import React, { useState } from 'react';
//import firebase from 'firebase'; // Import Firebase
import './RecruiterRegistration.css'; // Import your CSS file if needed

function Recruiter() {
  // Initialize state for form inputs
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [college, setCollege] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');
  const [password, setPassword] = useState('');
  const [availableJobs, setAvailableJobs] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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

  return (
    <div>
      <h1>Recruiter Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           required />
        </label>
        <label>
        Location:
          <input type="text" 
           value={location} 
           onChange={(e) => setLocation(e.target.value)} 
           required />
        </label>

        

        <label>
          Available jobs:
          <input type="text" 
           value={availableJobs} 
           onChange={(e) => setAvailableJobs(e.target.value)} 
           required />
        </label>
        <label>
          job Description:
          <input type="text" 
           value={jobDescription} 
           onChange={(e) => setJobDescription(e.target.value)} 
            />
        </label>
        
        
        
        <label>
          Looking for(Skills):
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

export default Recruiter;