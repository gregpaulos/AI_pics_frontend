import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Uploadphoto from "./Uploadphoto";
import GetAI from "./GetAI";
import DisplayAI from "./DisplayAI";

const Upload = ({AWSurl}) => {
    // console.log('THIS IS THE AWSURL', AWSurl)
    // let currentView = AWSurl ? <GetAI/> : <Uploadphoto/> 
    return (
    <div>
        {/* {currentView} */}
      {/* <Uploadphoto />   */}
      <Route path="/home/upload/step1" component={Uploadphoto} />
      <Route path="/home/upload/step2" component={GetAI} />
      <Route path="/home/upload/step3" component={DisplayAI} />
    </div>
  );
};


// const mapStateToProps = state => ({
//     awsURL: state.AWSurl[0]
//   });
  

  
//   export default connect(mapStateToProps)(Upload);
  export default Upload;
  