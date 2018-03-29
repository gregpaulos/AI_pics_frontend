import React from "react";
import { Link } from "react-router-dom";

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
    <div style={imageStyles}>
      <div>
        <div style={divStyle}>
          <h1 className="display-3">Let's Test Our Robot Overlords!</h1>
          <p className="lead">
            {" "}
            They may rule the world soon, but let's see how good they are at
            recognizing what's in a picture right now.
          </p>
        </div>
        <Link to="/home">
          <button style={buttonStyles} onClick={start}>
            Get Started >
          </button>
        </Link>
      </div>
    </div>
  );
}
