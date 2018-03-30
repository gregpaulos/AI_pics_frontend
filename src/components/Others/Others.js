import React from "react";
import { Route } from "react-router-dom";
import All from "./All";
import Individual from "./Individual";

const Other = () => {
  return (
    <div>
      <Route path="/home/others/all" component={All} />
      <Route path="/home/others/individual/:pageNumber" component={Individual} />
    </div>
  );
};

export default Other;