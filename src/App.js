
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import Message from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

import { Person, Router } from '@mui/icons-material';
import { BrowserRouter, Link, Navigate, Route, useNavigate } from 'react-router-dom';
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
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FireLogin from './FireLogin';



import TestSwipe from './TestSwipe';
import UITest from './UITest';
import Profile from './Profile1';
import SignInSide from './Login';
import Home from './Home';
import Chat from './Chat';
import { getAuth } from 'firebase/auth';

import ChatList from './ChatList';



function App() {
  const auth = getAuth();
  const navigate = useNavigate('');

  const handleSignOut = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    

    <Grid
    width={'100%'}
    height = {"100%"}
    Container
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={0} padding={1} margin={0}
    style={{  alignContent: "center", backgroundColor: " #007791" }}
  ><CssBaseline />
  {/* <BrowserRouter> */}
     
        

      <Routes style = {{backgroundColor: " #007791", width : "100%"}}>
      
      <Route index = {true} path = "/" element = {<TestSwipe />} />
      <Route path ="/firelogin" element = {<FireLogin />} />
      <Route path="/chat/:name/:email" element={<Chat />} />
      <Route path = "/SwippingCard/:email" element = {<TestSwipe />} />
      <Route path = "/chats" element = {<Chat />} />
      <Route path = "/chatlist" element = {<ChatList />} />
      <Route path = "/login" element = {<SignInSide />} />
      <Route path = "/SwippingCard" element = {<TestSwipe />} />
      <Route path = "/profile" element = {<Profile />} />
      <Route path = "/signup" element = {<SignUp />} />
     
      <Route path = "/Registration/Student" element = {<StudentRegistration />} />
      <Route path = "/Registration/Professional" element = {<ProfessionalRegistration />} />
      <Route path = "/Registration/Recruiter" element = {<RecruiterRegistration />} />

      <Route path = "/Recruiter" element = {<Recruiter />} />
        
      {/* </Route> */}

      </Routes>
       
      <Grid
        Container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0} padding={1} margin={0}
        style={{
          width: "80%",
          height: 150,
          backgroundColor: '#007791',
          '&:hover': {
            backgroundColor: 'primary',
            opacity: 0.5,
          },
        }}
      >
        <div className="Ellipse1" style={{ width: 75, height: 75,  position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={() => navigate("/SwippingCard")}>
            <HomeIcon />
          </Button>
        </div>
        <div className="Ellipse1" style={{ width: 75, height: 75,  position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={() => navigate("/profile")}>
            <PersonIcon />
          </Button>
        </div>
        <div className="Ellipse1" style={{ width: 75, height: 75,  position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={() => navigate("/chats")}>
            <Message />
          </Button>
        </div>
        <div className="Ellipse1" style={{ width: 75, height: 75,  position: "relative", background: '#D9D9D9', borderRadius: 9999, border: '1px black solid' }}>
          <Button size="tiny" color="primary" onClick={handleSignOut }>
            <ExitToAppIcon />
          </Button>
        </div>
      </Grid>

  {/* </BrowserRouter> */}
  </Grid>
  )
}

export default App;

