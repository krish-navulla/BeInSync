
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
import {Grid, Card, CardContent} from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import TestSwipe from './TestSwipe';
import UITest from './UITest';
import Profile from './Profile';




function App() {
  return (
  <Container style={{alignContent : "center"}}>
  <BrowserRouter>
     
        

      <Routes>
      <Route path = "/" element = {<Login />} />
      <Route path = "/SwippingCard" element = {<TestSwipe />} />
      <Route path = "/profile" element = {<Profile />} />

      {/* <Route path = "/signup" element = {<SignUp />} />
      <Route path = "/Registration/Student" element = {<StudentRegistration />} />
      <Route path = "/Registration/Professional" element = {<ProfessionalRegistration />} />
      <Route path = "/Registration/Recruiter" element = {<RecruiterRegistration />} />

      <Route path = "/Recruiter" element = {<Recruiter />} > */}
        
      {/* </Route> */}

      </Routes>
       
     

  </BrowserRouter>
  </Container>
  )
}

export default App;

