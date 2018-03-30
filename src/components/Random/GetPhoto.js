import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPhoto } from "../../actions";
import { Link } from "react-router-dom";

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
    }
  };

  return (
    <div>
      <p style={styles.disclaimer}>
        Disclaimer: this is a RANDOM photo - I have no idea what's going to come
        back. My apologies if it offends your sensibilities
      </p>
      <Link to="/home/random/step2">
        <button style={styles.button} className="buttons" onClick={getPhoto}>
          Get Random Photo
        </button>
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
