import React from "react";
import { Route } from "react-router-dom";
import All from "./All";

const Other = () => {
  return (
    <div>
      <Route path="/home/others/all" component={All} />
      <Route path="/home/others/step2" component={All} />
    </div>
  );
};

export default Other;