import React, { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Bio from "../Bio/Bio";

const Profile = () => {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [dateOfBirth, setDateOfBirth] = useState("dd/mm/yyyy");
  const [favActivity, setFavActivity] = useState("e.g. Camping");
  const [favColor, setFavColor] = useState("#8dc63f");
  const [friendsList, setFriendsList] = useState([]);
  const [loginHistory, setLoginHistory] = useState([]);

  // Load loginHistory and friendsList on component mount
  useEffect(() => {
    setLoginHistory([new Date().toLocaleString()]);
    setFriendsList(["Amy", "Saul", "Tom", "Jo"]);
  }, []);

  function updateFavColor() {
    console.log("fetching new favourite colour");
    fetch("https://api.noopschallenge.com/hexbot")
      .then(res => {
        if (res.status !== 200) {
          console.log("Error, status code: " + res.status);
          return;
        }

        res.json().then(data => {
          let newFavColor = data.colors[0].value;
          console.log("Setting favColor to " + newFavColor);
          setFavColor(newFavColor);
        });
      })
      .catch(err => {
        console.log("Fetch error: ", +err);
      });
  }

  return (
    <div className="profile-container">
      <Header
        firstName={firstName}
        lastName={lastName}
        loginHistory={loginHistory}
        favColor={favColor}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />
      <div className="body-container">
        <Bio
          dateOfBirth={dateOfBirth}
          favActivity={favActivity}
          favColor={favColor}
          updateFavColor={updateFavColor}
          setDateOfBirth={setDateOfBirth}
          setFavActivity={setFavActivity}
        />
        {/* <Friends friendsList={friendsList} /> */}
      </div>
    </div>
  );
};

export default Profile;
