import React from "react";
import PropTypes from "prop-types";
import "./Bio.css";

const Bio = ({
  dateOfBirth,
  favActivity,
  favColor,
  updateFavColor,
  setDateOfBirth,
  setFavActivity
}) => {
  // Style variable to set color of circle to current favColor state value
  let favColorCircleStyle = { background: favColor };

  const handleTextEdit = event => {
    switch (event.target.name) {
      case "date-of-birth":
        if (event.target.value === "") {
          // no user text input, set field to default value
          setDateOfBirth("dd/mm/yyyy");
          break;
        }
        console.log("Setting firstName to " + event.target.value);
        setDateOfBirth(event.target.value);
        break;
      case "favourite-activity":
        if (event.target.value === "") {
          // no user text input, set field to default value
          setFavActivity("e.g. Camping");
          break;
        }
        console.log("Setting lastName to " + event.target.value);
        setFavActivity(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bio-container">
      <div className="bio-card-container">
        <div className="bio-stats-container">
          <div className="stat-container">
            <p className="stat-label">Date of Birth:</p>
            <input
              type="text"
              name="date-of-birth"
              id="bio-birth-text"
              className="stat-value"
              placeholder={dateOfBirth}
              onChange={handleTextEdit}
            ></input>
          </div>
          <div className="stat-container">
            <p className="stat-label">Favourite Activity:</p>
            <input
              type="text"
              name="favourite-activity"
              className="stat-value"
              placeholder={favActivity}
              onChange={handleTextEdit}
            ></input>
          </div>
          <div className="stat-container">
            <p className="stat-label">Favourite Colour:</p>
            <div
              style={favColorCircleStyle}
              id="fav-color-circle"
              onClick={() => updateFavColor()}
            ></div>
          </div>
        </div>
        <div id="divider-line"></div>
        <div className="bio-about-container">
          <p id="bio-about-title">About Me</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

Bio.propTypes = {
  dateOfBirth: PropTypes.string,
  favActivity: PropTypes.string,
  favColor: PropTypes.string
};

export default Bio;
