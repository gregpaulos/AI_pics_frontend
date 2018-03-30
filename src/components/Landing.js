import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

export default function Landing({ start }) {
  var buttonStyles = {
    color: "black",
    fontSize: "1.5em",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer"
  };

  var imageStyles = {
    backgroundColor: "black",
    backgroundImage: "url(./robots.jpg)",
    height: "100%",
    padding: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  var divStyle = {
    color: "white"
  };

  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div style={imageStyles}>
          <div>
            <div style={divStyle}>
              <h1>Let's Test Our Robot Overlords!</h1>
              <p>
                They may rule the world soon, but let's see how good they are at
                recognizing what's in a picture right now.
              </p>
            </div>
            <Link to="/home">
              <button style={buttonStyles}>Get Started ></button>
            </Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <div
          style={{
            ...imageStyles,
            padding: "30px",
            paddingTop: "100px",
            paddingBottom: "500px"
          }}
        >
          <div style={divStyle}>
            <h1>Let's Test Our Robot Overlords!</h1>
            <p>
              They may rule the world soon, but let's see how good they are at
              recognizing what's in a picture right now.
            </p>
            <Link to="/home">
              <button style={buttonStyles} className="Button-hover">Get Started ></button>
            </Link>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
