import React from 'react';

function Profile() {
  return (
    <div className="profile">
      {/* Profile Picture */}
      <img
        className="profile-picture"
        src="path-to-profile-picture"
        alt="Profile"
      />

      {/* Name */}
      <h2 className="profile-name">John Doe</h2>

      {/* Skills */}
      <div className="profile-skills">
        <h3>Skills:</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          {/* Add more skills */}
        </ul>
      </div>

      {/* Matches List */}
      <div className="profile-matches">
        <h3>Matches:</h3>
        <ul>
          <li>Match 1</li>
          <li>Match 2</li>
          {/* Add more matches */}
        </ul>
      </div>

      {/* Sign Out Option */}
      <button className="sign-out-button">Sign Out</button>
    </div>
  );
}

export default Profile;
