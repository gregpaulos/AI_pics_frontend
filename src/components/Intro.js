import React from "react";
import GetPhoto from "../components/Random/GetPhoto";
export default function Intro({ start }) {
  return (
    <div>
      <h4>Welcome</h4>
      <h4>
        Let's get started testing out the robots by clicking the button below to
        get a random photo from the unsplash photography website.
      </h4>
      <GetPhoto />
      <h4>Or for a different option, click one of the boxes on the left.</h4>
    </div>
  );
}
