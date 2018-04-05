import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAI } from "../../actions";
import circle from "../../circles.svg";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";      

const GetAI = ({ watson, clarifai, google, getAI, photo_url }) => {
  const requestToGetAI = () => {
    let apis = ["watson", "google", "clarifai"];
    apis.forEach(api => {
      getAI(photo_url, api);
    });
  };

  const styles = {
    photo: {
      width: "400px",
      padding: "10px"
    },
    button: {
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
    }

  };

  const image = photo_url ? (
    <img src={photo_url} style={styles.photo} alt="" />
  ) : (
    <img src={circle} style={styles.photo} alt="" />
  );

  const button = photo_url ? (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>
          <Link to="/home/random/step3">
            <button
              style={styles.button}
              className="buttons"
              onClick={requestToGetAI}
            >
              Send to the Robots >
            </button>
          </Link>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1224px)">
        <Link to="/home/random/step3">
          <button
            style={styles.buttonPhone}
            className="buttons"
            onClick={requestToGetAI}
          >
            Send to the Robots >
          </button>
        </Link>
      </MediaQuery>
    </div>
  ) : (
    <h3>Loading random photo...</h3>
  );

  return (
    <div>
      <div>{image}</div>
      <div>{button}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  photo_url: state.randomPhoto[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAI: getAI
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GetAI);
