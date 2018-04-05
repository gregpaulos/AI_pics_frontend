import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAll } from "../../actions";
const uuidv4 = require('uuid/v4');


const Individual = ({ match, all, getAll }) => {
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
    }
  };


  let individualPhoto = all[match.params.pageNumber - 1];

  let google = individualPhoto.apis.google;
  let watson = individualPhoto.apis.watson;
  let clarifai = individualPhoto.apis.clarifai;
  let photo_url = individualPhoto.url;

  const googlelist = google.map(el => {
    return <li key={uuidv4()}>{el}</li>;
  });

  const googledisplay = <ul>{googlelist}</ul>;

  const clarifailist = clarifai.map((el, i) => {
    if (i < 10) {
      return <li key={uuidv4()}>{el}</li>;
    } else {
      return ""
    }
  });

  const clarifaidisplay = <ul>{clarifailist}</ul>;

  const watsonlist = watson.map(el => {
    return <li key={uuidv4()}>{el}</li>;
  });

  const watsondisplay = <ul>{watsonlist}</ul>;

  return (
    <div>
      <div>
      <img src={photo_url} style={styles.photo} alt="" />
      </div>
      <div>
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
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAll: getAll
    },
    dispatch
  );

const mapStateToProps = state => ({
  all: state.all
});

export default connect(mapStateToProps, mapDispatchToProps)(Individual);
