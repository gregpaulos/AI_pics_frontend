import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

export default function Options({ start }) {
  const styles = {
    height: "125px",
    borderBottomStyle: "solid",
    borderBottomColor: "white",
    borderBottomWidth: ".001em",
    paddingTop: "20px"
  };
  const linkStyles = {
    textDecoration: "none",
    color: "white"
  };

  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>
          <Link style={linkStyles} to="/home/random/step1">
            <div style={styles} className="Hover-darken">
              <h1>?</h1>
              <p>Try a Random Photo</p>
            </div>
          </Link>
          <Link style={linkStyles} to="/home/upload/step1">
          <div style={styles} className="Hover-darken">
            <h1>&uarr;</h1>
            <p>Upload Your Own Photo</p>
          </div>
          </Link>
          <Link style={linkStyles} to="/home/others/all">
            <div style={styles} className="Hover-darken">
              <h1>&harr;</h1>
              <p>See What Other People Have Done</p>
            </div>
          </Link>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1224px)">
        <div>
          <Link style={linkStyles} to="/home/random/step1">
            <div style={styles}>
              <h1>?</h1>
              <p>Try a Random Photo</p>
            </div>
          </Link>
          <Link style={linkStyles} to="/home/upload/step1">
          <div style={styles}>
            <h1>&uarr;</h1>
            <p>Upload Your Own Photo</p>
          </div>
          </Link>
          <Link style={linkStyles} to="/home/others/all">
            <div style={styles}>
              <h1>&harr;</h1>
              <p>See What Other People Have Done</p>
            </div>
          </Link>
        </div>
      </MediaQuery>
    </div>
  );
}
