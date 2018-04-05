import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAll } from "../../actions";
import circle from "../../circles.svg";
import { Link } from "react-router-dom";
const uuidv4 = require('uuid/v4');

const All = ({ all, getAll }) => {
  const styles = {
    noBorder: { padding: "0px", margin: "0px" },
    circle: {
      height: "300px",
      padding: "20px"
    },
    photo: {
      maxWidth: "140px",
      maxHeight: "140px",
      padding: "20px"
    },
    button: {
      borderRadius: "8px",
      padding: "10px",
      cursor: "pointer"
    },
    flexin: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    card: {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      width: "180px",
      height: "180px",
      margin: "10px",
      marginTop: "40px",
      zIndex: "1",
      animation: "fadein 3s"
    }
  };

  let greeting;

  if (all.length > 0) {
    greeting = <div />;
  } else {
    getAll();
    greeting = (
      <div>
        <h2 style={styles.noBorder}>Loading photos...</h2>
        <img src={circle} style={styles.circle} alt="" />
      </div>
    );
  }

  return (
    <div>
      <div>{greeting}</div>
      <div style={styles.flexin}>
        {all.map((photo, i) => (
          <Link to={`/home/others/individual/${i + 1}`}>
            <div key={uuidv4()} style={styles.card} className="Hover-cards">
              <img style={styles.photo} src={photo.url} alt="" />
            </div>
          </Link>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(All);
