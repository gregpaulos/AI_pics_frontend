import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadPhoto , uploadANDsend} from "../../actions";
import circle from "../../circles.svg";
import { Link } from "react-router-dom";

const GetAI = ({ uploadPhoto, uploadANDsend, file }) => {
  const upload = () => {
    uploadANDsend(file)
    // uploadPhoto(file)
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
    }
  };

  const button = (
    <Link to="/home/upload/showAI">
      <button
        style={styles.button}
        className="buttons"
        onClick={upload}
      >
        Send to the Robots >
      </button>
    </Link>
  ) 

  return (
    <div>
      <div>{button}</div>
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
