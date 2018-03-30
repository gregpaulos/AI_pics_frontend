import React from "react";
import GetPhoto from "./GetPhoto";

const RandomIntro = () => {
  return (
    <div>
      <h4>
        Click the button below to get a random photo from the unsplash photography website. </h4>
        <GetPhoto/>
        <h4>Or for a different option, click one of the
        boxes on the left.
      </h4>
    </div>
  );
};

export default RandomIntro;

