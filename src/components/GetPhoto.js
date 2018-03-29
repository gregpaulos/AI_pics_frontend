import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPhoto } from "../actions";

const GetPhoto = ({ photo_url, getPhoto}) => {
  return (
    <div>
      <div>OH MAAAAAAAAn</div>
      <button className="random_button" onClick={getPhoto}>
        Get Rando
      </button>
      <img src={photo_url} alt="" />
    </div>
  );
};

const mapStateToProps = state => ({
  photo_url: state.randomPhoto[0]
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhoto: getPhoto
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GetPhoto);
