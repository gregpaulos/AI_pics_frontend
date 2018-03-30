import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAll } from "../../actions";
import circle from "../../circles.svg";
import { Link } from "react-router-dom";

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
      animation: "dropin 3s"
    }
  };


  let individualPhoto = all[match.params.pageNumber - 1];

  let google = individualPhoto.apis.google;
  //   ? individualPhoto.google : [];
  let watson = individualPhoto.apis.watson;
  //   ? individualPhoto.watson : [];
  let clarifai = individualPhoto.apis.clarifai;
  //   ? individualPhoto.clarifai : [];
  let photo_url = individualPhoto.url;
  //   ? individualPhoto.url : "";

  const googlelist = google.map(el => {
    return <li key={el}>{el}</li>;
  });

  const googledisplay = <ul>{googlelist}</ul>;

  const clarifailist = clarifai.map((el, i) => {
    if (i < 10) {
      return <li key={el}>{el}</li>;
    }
  });

  const clarifaidisplay = <ul>{clarifailist}</ul>;

  const watsonlist = watson.map(el => {
    return <li key={el}>{el}</li>;
  });

  const watsondisplay = <ul>{watsonlist}</ul>;

  return (
    <div>
      <div>
      <img src={photo_url} style={styles.photo} alt="" />
        {/* <div style={styles.flexin}>
          <Link to={`/home/others/individual/${match.params.pageNumber - 1}`}>
            {" "}
            <h1> &#60; </h1>{" "}
          </Link>
          <img src={photo_url} style={styles.photo} alt="" />
          <Link to={`/home/others/individual/${match.params.pageNumber + 1}`}>
            {" "}
            <h1> > </h1>{" "}
          </Link>
        </div> */}
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
