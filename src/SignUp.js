// CustomPage.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SignUp.css';

// SignUp.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import your CSS file if needed


function SignUp() {
  const navigate = useNavigate(); // Get the navigation function

  return (
    <div>
      <h1>Sign Up Page</h1>
      <div className="button-container">
        {/* Student Registration Button */}
        <button className="custom-button" onClick={() => {navigate('/Registration/Student')}}>
          Student
        </button>

        {/* Professional Registration Button */}
        <button className="custom-button" onClick={() => {navigate('/Registration/Professional')}}>
          Professional
        </button>

        {/* Recruiter Registration Button */}
        <button className="custom-button" onClick={() => {navigate('/Registration/Recruiter')}}>
          Recruiter
        </button>
      </div>
    </div>
  );
}

export default SignUp;

