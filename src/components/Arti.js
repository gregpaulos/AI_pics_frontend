import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAI } from "../actions";

const Arti = ({ watson, clarifai, google, getAI, photo_url }) => {
  const requestToGetAI = () => {
    let apis = ["watson", "google", "clarifai"];
    apis.forEach(api => {
      getAI(photo_url, api);
    });
  };
  return (
    <div>
      <div>OH MAAAAAAAAn</div>
      <button onClick={requestToGetAI}>GET AI</button>
      <ul>
        Google
        {google.map(el => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
      <ul>
        clarifai
        {clarifai.map(el => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
      <ul>
        watson
        {watson.map(el => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  google: state.google,
  clarifai: state.clarifai,
  watson: state.watson,
  photo_url: state.randomPhoto[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAI: getAI
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Arti);
