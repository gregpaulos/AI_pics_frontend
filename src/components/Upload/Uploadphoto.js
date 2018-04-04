import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showUserPhoto, addFile } from "../../actions";
import GetAI from "./GetAI";

const Uploadphoto = ({
  photo,
  file,
  showUserPhoto,
  addFile
}) => {
  const onChange = event => {
    let newPic = event.target.files["0"];
    let localurl = window.URL.createObjectURL(newPic);
    addFile(newPic);
    showUserPhoto(localurl);
  };

  const styles = {
    button: {
      borderRadius: "8px",
      padding: "10px",
      cursor: "pointer"
    },
    fileinput: {
      borderRadius: "8px",
      padding: "10px",
    },
    photo: {
      width: "400px",
      padding: "10px"
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
          <h3>Choose an image to upload (PNG, JPG)</h3>
          <p style={styles.disclaimer}>
            Please DO NOT put anything offensive up here. You know what I'm
            talking about.
          </p>
          <input
          style={styles.fileinput}
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
            onChange={onChange}
          />
        </div>
        <img src={photo} style={styles.photo} alt="" />
        {file.length > 0 ? <GetAI /> : ""}
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  photo: state.potentialUpload[0],
  file: state.file
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showUserPhoto: showUserPhoto,
      addFile: addFile
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Uploadphoto);
