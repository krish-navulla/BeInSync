

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TestSwipe from './TestSwipe';
import { getFirestore, collection, addDoc } from "firebase/firestore";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

  function SignInSide() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginSuccess, setLoginSuccess] = React.useState(false); // Declare 'mounted' state variable

     // Get the navigation function
    const navigate = useNavigate('');

    const auth = getAuth();
    const reroute = () => {
        navigate("/profile");
    }


    const  handleLogin = () => {
        console.log("Login");
        navigate('/SwippingCard');
            // createUserWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Signed in 
            //     console.log("Login success");
            //    reroute();

            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // ..
            //     console.error('Registration error:', errorCode, errorMessage);
            //     navigate('/SwippedCard/');
            // });
        
    };


  return (
    <div className="login-custom" style ={{width : "100%", height:"70%"}}>
        
        (<div style={{width: "100%", height:"100%"}}>
        <ThemeProvider theme={defaultTheme}>
      <Grid container width={"100%"} height={"100%"} component="main" >
        <CssBaseline />
        <Grid
          item
          style ={{width : "100%", height:"100%"}}
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
    <Grid style ={{width : "100%", height:"100%"}} item xs={12} sm={8} md={5} 
        component={Paper} elevation={6} square >
        
    <form onSubmit = {handleLogin} className = " login" style ={{width : "100%", height:"70%"}}>
        
        <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
        </label>
        <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', margin: '20px' }}
        />
      
        <label htmlFor="exampleInputPassword1" className="form-label">
        Password
        </label>
        <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', margin: '20px' }}
        />

       
    
    <button type="submit" className="btn btn-primary" >
        Submit
    </button >
    <p>
        Don't have an account?{' '}
        <button className="btn btn-secondary" onClick={() =>navigate("/signup")}>Sign Up</button>
    </p>
    </form>




        </Grid>
      </Grid>
    </ThemeProvider>
        </div>)
    </div>
  );
}

export default SignInSide;