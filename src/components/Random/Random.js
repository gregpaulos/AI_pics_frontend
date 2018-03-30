import React from "react";
import { Route } from "react-router-dom";
import RandomIntro from "./RandomIntro";
import GetAI from "../GetAI";
import DisplayAI from "../DisplayAI";

const Random = () => {
  return (
    <div>
      <Route path="/home/random/step1" component={RandomIntro} />
      <Route path="/home/random/step2" component={GetAI} />
      <Route path="/home/random/step3" component={DisplayAI} />
    </div>
  );
};

export default Random;
