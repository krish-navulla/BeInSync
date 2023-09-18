import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  firstName,
  lastName,
  loginHistory,
  favColor,
  setFirstName,
  setLastName
}) => {
  // Style variable to set color of Header to current favColor state value
  let favColorStyle = { background: favColor };

  const handleTextEdit = event => {
    switch (event.target.name) {
      case "first-name":
        if (event.target.value === "") {
          // no user text input, set field to default value
          setFirstName("First Name");
          break;
        }
        console.log("Setting firstName to " + event.target.value);
        setFirstName(event.target.value);
        break;
      case "last-name":
        if (event.target.value === "") {
          // no user text input, set field to default value
          setLastName("Last Name");
          break;
        }
        console.log("Setting lastName to " + event.target.value);
        setLastName(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="header-container" style={favColorStyle}>
      <div className="header-picture-container">
        <img
          id="header-picture"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="My Profile"
        />
      </div>
      <div className="header-text-container">
        <input
          type="text"
          name="first-name"
          className="name-value"
          placeholder={firstName}
          onChange={handleTextEdit}
        ></input>
        <input
          type="text"
          name="last-name"
          className="name-value"
          placeholder={lastName}
          onChange={handleTextEdit}
        ></input>
        <div className="login-time-container">
          <p>Last logged in:</p>
          <p className="login-history-value">{loginHistory}</p>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  loginHistory: PropTypes.array
};

export default Header;
