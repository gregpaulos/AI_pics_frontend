import React from "react";
import GetPhoto from "./GetPhoto";
import MediaQuery from "react-responsive";

const RandomIntro = () => {
  const styles = {
    noBorder: { padding: "0px", margin: "0px" }
  };

  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <h4>
          Click the button below to get a random photo from the unsplash
          photography website.{" "}
        </h4>
        <GetPhoto />
        <h4>Or for a different option, click one of the boxes on the left.</h4>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1224px)">
        <div style={styles.noBorder}>
          <h4 style={styles.noBorder}>
            Click the button below to get a random photo from the unsplash
            photography website.
          </h4>
          <GetPhoto />
          <h4 style={styles.noBorder}>
            Or for a different option, click one of the boxes on the left.
          </h4>
        </div>
      </MediaQuery>
    </div>
  );
};

export default RandomIntro;
