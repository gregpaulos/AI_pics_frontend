import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showUserPhoto, addFile } from "../../actions";
import GetAI from "./GetAI";
import MediaQuery from "react-responsive";

const Uploadphoto = ({ photo, file, showUserPhoto, addFile }) => {
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
      width: "0.1px",
      height: "0.1px",
      opacity: "0",
      overflow: "hidden",
      position: "absolute",
      zIndex: "-1"
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
    },
    noBorder: { padding: "0px", margin: "0px" },
    label: {
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
      <form>
        <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <h3>Choose an image to upload (PNG, JPG)</h3>
          </MediaQuery>

          <MediaQuery query="(max-device-width: 1224px)">
            <h3 style={styles.noBorder}>
              Choose an image to upload (PNG, JPG)
            </h3>
          </MediaQuery>

          <p style={styles.disclaimer}>
            Please DO NOT put anything offensive up here. You know what I'm
            talking about.
          </p>
        </div>

        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <input
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
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
          {file.length > 0 ? (
            <GetAI />
          ) : (
            <div>
              <label htmlFor="image_uploads" style={styles.label}>
                Choose a file
              </label>
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
          )}
          <img src={photo} style={styles.photo} alt="" />
        </MediaQuery>
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
