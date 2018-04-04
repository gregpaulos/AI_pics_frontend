import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearAWS } from "../actions";
import { clearUpload } from "../actions";
import { clearAI } from "../actions";

const Options = ({ start, clearAWS, clearUpload, clearAI }) => {
// export default function Options({ start }) {
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

  const farts = () => {
    console.log('CLICKED ON FARTS')
    clearAWS()
    clearUpload()
    clearAI()
  }

  return (
    <div onClick={farts}>
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
          <Link style={linkStyles} to="/home/upload/step1" onClick={farts}>
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



const mapStateToProps = state => ({
  photo_url: state.AWSurl[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearAWS: clearAWS,
      clearUpload: clearUpload,
      clearAI: clearAI,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Options);