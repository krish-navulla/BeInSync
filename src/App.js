import { Box } from '@mui/system';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import Message from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

import { Person, Router } from '@mui/icons-material';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Login';
import Mentor from './Mentor';
import Recruiter from './Recruiter';
import SignUp from './SignUp';
import StudentRegistration from './Registration/StudentRegistration'
import ProfessionalRegistration from './Registration/ProfessionalRegistration';
import RecruiterRegistration from './Registration/RecruiterRegistration';
import SwipingCard from './SwipingCard';






function App() {
  return (
  <BrowserRouter>
    <div class="App">
      
      <div class="container-lg" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh', // Adjust the height as needed
          }}
          >
          <div 
            style={{
              width: '500px', // Adjust the width as needed
              height: '500px', // Adjust the height as needed
              border: '2px solid #ccc', // Add border styling
              borderRadius: '10px', // Add border radius for a rounded appearance
              overflow: 'hidden', // Hide overflowing content
            }}
            >
          
            <Routes>
              <Route path = "/" element = {<Login />} />
              <Route  path = "/login" element = {<Login />} />
              <Route path = "/mentor" element = {<Mentor />} />
              <Route path = "SwipingCard" element = {<SwipingCard />} />
                
              
              <Route path = "/signup" element = {<SignUp />} />
              <Route path = "/Registration/Student" element = {<StudentRegistration />} />
              <Route path = "/Registration/Professional" element = {<ProfessionalRegistration />} />
              <Route path = "/Registration/Recruiter" element = {<RecruiterRegistration />} />
              
              <Route path = "/Recruiter" element = {<Recruiter />} >
                
              </Route>

          </Routes>
          </div>
      </div>
    </div>
  </BrowserRouter>
    
  )
}

export default App;
