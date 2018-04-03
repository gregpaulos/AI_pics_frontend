import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadPhoto, showUserPhoto } from "../../actions";
import { Link } from "react-router-dom";

const Uploadphoto = ({ photo, showUserPhoto, uploadPhoto }) => {
  
  const onChange = event => {
    console.log("fart");
    let newPic = event.target.files["0"];
    console.log(newPic);
    let localthing = window.URL.createObjectURL(newPic);
    console.log(localthing);
    showUserPhoto(localthing)
  };

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
      <form>
        <div>
          <label htmlFor="image_uploads">
            Choose an image to upload (PNG, JPG)
          </label>
          <p style={styles.disclaimer}>
            Please DO NOT put anything offensive up here. You know what I'm
            talking about.
          </p>

          <input
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
            onChange={onChange}
          />
        </div>
        <img src={photo} alt=""/>
        <div className="preview" />
      </form>

      <Link to="/home/upload/step2">
        <button style={styles.button} className="buttons" onClick={uploadPhoto}>
          Upload Photo
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  photo: state.potentialUpload[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showUserPhoto: showUserPhoto,
      uploadPhoto: uploadPhoto
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Uploadphoto);
