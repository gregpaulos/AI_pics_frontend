import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadPhoto, uploadANDsend } from "../../actions";
import circle from "../../circles.svg";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const GetAI = ({ uploadPhoto, uploadANDsend, file }) => {
  const upload = () => {
    uploadANDsend(file);
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

  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>
          <Link to="/home/upload/showAI">
            <button style={styles.button} className="buttons" onClick={upload}>
              Send to the Robots >
            </button>
          </Link>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1224px)">
        <Link to="/home/upload/showAI">
          <button
            style={styles.buttonPhone}
            className="buttons"
            onClick={upload}
          >
            Send to the Robots >
          </button>
        </Link>
      </MediaQuery>
    </div>
  );
};

const mapStateToProps = state => ({
  file: state.file[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      uploadPhoto: uploadPhoto,
      uploadANDsend: uploadANDsend
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GetAI);
