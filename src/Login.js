import { getAuth } from 'firebase/auth';
import react from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = react.useState("");
    const [password, setPassword] = react.useState("");

    const navigate = useNavigate(); // Get the navigation function


    const auth = getAuth();

    const handleLogin = () => {
        console.log("Login");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('User registered:', user);
                // ...
                
                navigate('/SwipingCard');

                console.log("Login success");


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.error('Registration error:', errorCode, errorMessage);
            });

    };



    return (
        <div>
    <h2>Login</h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
    <p>
      Don't have an account?{' '}
      <Link to="/signup">Sign Up</Link>
    </p>
  </div>
        
    )
};

export default Login;


