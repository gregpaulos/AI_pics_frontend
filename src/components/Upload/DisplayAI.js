import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import circle from "../../circles.svg";
import { clearUpload } from "../../actions";

const DisplayAI = ({ watson, clarifai, google, photo_url, clearUpload }) => {
  

  clearUpload()

  console.log(photo_url)
  const styles = {
    photo: {
      width: "300px",
      padding: "20px"
    },
    flexin: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    card: {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      width: "180px",
      margin: "10px",
      marginTop: "40px",
      zIndex: "1",
      animation: "dropin 3s"
    }
  };

  const googlelist = google.map(el => {
    return <li key={el}>{el}</li>;
  });

  const googledisplay =
    google.length > 0 ? (
      <ul>{googlelist}</ul>
    ) : (
      <div>
        <div>Robot Thinking...</div>
        <div>
          {" "}
          <img src={circle} alt="" />
        </div>
      </div>
    );

  const clarifailist = clarifai.map((el, i) => {
    if (i < 10) {
      return <li key={el}>{el}</li>;
    }
  });

  const clarifaidisplay =
    clarifai.length > 0 ? (
      <ul>{clarifailist}</ul>
    ) : (
      <div>
        <div>Robot Thinking...</div>
        <div>
          {" "}
          <img src={circle} alt="" />
        </div>
      </div>
    );

  const watsonlist = watson.map(el => {
    return <li key={el}>{el}</li>;
  });

  const watsondisplay =
    watson.length > 0 ? (
      <ul>{watsonlist}</ul>
    ) : (
      <div>
        <div>Robot Thinking...</div>
        <div>
          {" "}
          <img src={circle} alt="" />
        </div>
      </div>
    );

  return (
    <div>
      <div>
        <img src={photo_url} style={styles.photo} alt="" />
      </div>
      <div style={styles.flexin}>
        <div style={styles.card}>
          <h4>Google</h4>
          <div>{googledisplay}</div>
        </div>
        <div style={styles.card}>
          <h4>Clarifai</h4>
          <div>{clarifaidisplay}</div>
        </div>
        <div style={styles.card}>
          <h4>Watson</h4>
          <div>{watsondisplay}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  google: state.google,
  clarifai: state.clarifai,
  watson: state.watson,
  photo_url: state.AWSurl[0]
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearUpload: clearUpload
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAI);

