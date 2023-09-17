import { getAuth } from 'firebase/auth';
import react from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Login.css';


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
        <div >
    <form class = " login">
    <div className='card'>
        <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
        </label>
        <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
        </div>
    </div>
    <div className='card'>
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
        />
    </div>
    <div className="form-check">
        <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
        </label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleLogin}>
        Submit
    </button>
    <p>
        Don't have an account?{' '}
        <Link to="/signup">Sign Up</Link>
    </p>
    </form>



  </div>

        


        
    )
};

export default Login;


