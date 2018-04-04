import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Uploadphoto from "./Uploadphoto";
import GetAI from "./GetAI";
import DisplayAI from "./DisplayAI";

const Upload = () => {
  return (
    <div>
      <Route path="/home/upload/getphoto" component={Uploadphoto} />
      <Route path="/home/upload/showAI" component={DisplayAI} />
    </div>
  );
};

export default Upload;
