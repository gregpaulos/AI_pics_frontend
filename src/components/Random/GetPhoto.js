import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPhoto } from "../../actions";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const GetPhoto = ({ photo_url, getPhoto }) => {
  const styles = {
    button: {
      borderRadius: "8px",
      padding: "10px",
      cursor: "pointer"
    },
    disclaimer: {
      fontSize: "80%"
    },
    appBarLarge: { backgroundColor: "white" },
    titleLarge: {
      color: "rgb(100, 100, 100)"
    },
    buttonPhone: {
      padding: "10px",
      fontSize: "1.25em",
      fontWeight: "700",
      color: "black",
      backgroundColor: "white",
      display: "inline-block"
    }
  };

  return (
    <div>
      <p style={styles.disclaimer}>
        Disclaimer: this is a RANDOM photo - I have no idea what's going to come
        back. My apologies if it offends your sensibilities
      </p>
      <Link to="/home/random/step2">
        <MediaQuery query="(min-device-width: 1224px)">
          <button style={styles.button} className="buttons" onClick={getPhoto}>
            Get Random Photo
          </button>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
        <button
          style={styles.buttonPhone}
          className="buttons"
          onClick={getPhoto}
        >
          Get Random Photo
        </button>
        </MediaQuery>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  photo_url: state.randomPhoto[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhoto: getPhoto
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GetPhoto);
