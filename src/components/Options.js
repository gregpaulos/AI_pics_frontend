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

  return (
    <div>
      <div style={styles} className="Wanna-hover">
        <h1>?</h1>
        <p>Try a Random Photo</p>
      </div>
      <div style={styles} className="Wanna-hover">
        <h1>&uarr;</h1>
        <p>Upload Your Own Photo</p>
      </div>
      <div style={styles} className="Wanna-hover">
        <h1>&harr;</h1>
        <p>See What Other People Have Done</p>
      </div>
    </div>
  );
}
