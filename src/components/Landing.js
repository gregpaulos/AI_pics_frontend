import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

export default function Landing({ start }) {

  const styles = {
    button : {
      color: "black",
      fontSize: "1.5em",
      borderRadius: "8px",
      padding: "10px",
      cursor: "pointer"
    },
    buttonPhone: {
      padding: "10px",
      fontSize: "1.25em",
      fontWeight: "700",
      color: "black",
      backgroundColor: "white",
      display: "inline-block"
    },
    imageStyles : {
      backgroundColor: "black",
      backgroundImage: "url(./robots.jpg)",
      height: "100%",
      padding: "300px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },

    divStyle : {
      color: "white"
    },
 
  
  };


  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div style={styles.imageStyles}>
          <div>
            <div style={styles.divStyle}>
              <h1>Let's Test Our Robot Overlords!</h1>
              <p>
                They may rule the world soon, but let's see how good they are at
                recognizing what's in a picture right now.
              </p>
            </div>
            <Link to="/home">
              <button style={styles.button}>Get Started ></button>
            </Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <div
          style={{
            ...styles.imageStyles,
            padding: "30px",
            paddingTop: "100px",
            paddingBottom: "500px"
          }}
        >
          <div style={styles.divStyle}>
            <h1>Let's Test Our Robot Overlords!</h1>
            <p>
              They may rule the world soon, but let's see how good they are at
              recognizing what's in a picture right now.
            </p>
            <Link to="/home">
              <button style={styles.buttonPhone} className="Button-hover">Get Started ></button>
            </Link>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
