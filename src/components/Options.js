import React from "react";
import { Link } from "react-router-dom";

export default function Options({ start }) {
  const styles = {
    height: "125px",
    borderBottomStyle: "solid",
    borderBottomColor: "white",
    borderBottomWidth: ".001em",
    paddingTop: "20px"
  };
  const linkStyles = {
    textDecoration:"none",
    color:"white"
  }

  return (
    <div>
      <Link style={linkStyles} to="/home/random/step1">
        <div style={styles} className="Hover-darken">
          <h1>?</h1>
          <p>Try a Random Photo</p>
        </div>
      </Link>
      <div style={styles} className="Hover-darken">
        <h1>&uarr;</h1>
        <p>Upload Your Own Photo</p>
      </div>
      <div style={styles} className="Hover-darken">
        <h1>&harr;</h1>
        <p>See What Other People Have Done</p>
      </div>
    </div>
  );
}
