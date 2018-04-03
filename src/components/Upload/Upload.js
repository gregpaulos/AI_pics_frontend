import React from "react";
import { Route } from "react-router-dom";
import Uploadphoto from "./Uploadphoto";
import GetAI from "./GetAI";
import DisplayAI from "../Random/DisplayAI";

const Upload = () => {
  return (
    <div>
      <Route path="/home/upload/step1" component={Uploadphoto} />
      <Route path="/home/upload/step2" component={GetAI} />
      <Route path="/home/upload/step3" component={DisplayAI} />
    </div>
  );
};

export default Upload;