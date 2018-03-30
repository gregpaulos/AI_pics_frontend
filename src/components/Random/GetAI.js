import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAI } from "../../actions";
import circle from "../../circles.svg"
import { Link } from "react-router-dom";

const GetAI = ({ watson, clarifai, google, getAI, photo_url }) => {
  const requestToGetAI = () => {
    let apis = ["watson", "google", "clarifai"];
    apis.forEach(api => {
      getAI(photo_url, api);
    });
  };

  const styles ={
    photo: {
      width:"400px",
      padding: "10px"
    },
      button: {
        borderRadius: "8px",
        padding: "10px",
        cursor: "pointer"
      },

  }

  const image = photo_url ?
  <img src={photo_url} style={styles.photo} alt="" />
  :
  <img src={circle} style={styles.photo} alt="" />

  const button = photo_url ?
  <Link to="/home/random/step3"><button style={styles.button} className="buttons" onClick={requestToGetAI}>Send to the Robots > </button></Link>
    :
    <h3>Loading random photo...</h3>


  return (
    <div>
      <div>
      {image}
      </div>
      <div>
        {button}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  photo_url: state.randomPhoto[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAI: getAI
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GetAI);
