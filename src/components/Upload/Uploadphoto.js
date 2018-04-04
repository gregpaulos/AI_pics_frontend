import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadPhoto, showUserPhoto } from "../../actions";
import { Link } from "react-router-dom";

class Uploadphoto extends Component {
  state = { file: [] };
  onSubmit = event => {
    event.preventDefault();

    console.log("Got to the submit biyatch");

    let file = this.state.file[0];
    console.log(file);
    this.props.uploadPhoto(file);
  };

  onChange = event => {
    console.log("fart");
    console.log(this.props);

    let newPic = event.target.files["0"];
    console.log(newPic);
    let localurl = window.URL.createObjectURL(newPic);
    console.log(localurl);
    this.setState({ file: [newPic] });
    this.props.showUserPhoto(localurl);
  };

  styles = {
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

  render() {
    return (
      <div>
        <h1>{this.props.AWSurl? "GOT AWS" : "NOPE ON AWS"}</h1>
        <h1>{this.props.photo ? "Yes"+this.props.photo : "No" }</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="image_uploads">
              Choose an image to upload (PNG, JPG)
            </label>
            <p style={this.styles.disclaimer}>
              Please DO NOT put anything offensive up here. You know what I'm
              talking about.
            </p>

            <input
              type="file"
              id="image_uploads"
              name="image_uploads"
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={this.onChange}
            />
          </div>
          <img src={this.props.photo} alt="" />
          <div className="preview" />

          
            <input id="submit" type="submit" value="Upload Photo" />
        </form>

        <Link to="/home/upload/step2">
          <button
            style={this.styles.button}
            className="buttons"
            onClick={this.uploadPhoto}
          >
            Goto next section
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photo: state.potentialUpload[0],
  AWSurl: state.AWSurl[0]
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
