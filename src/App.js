import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Options from "./components/Options";
import Arti from "./components/Arti";
import GetPhoto from "./components/GetPhoto";
import "./App.css";
import MediaQuery from "react-responsive";

class App extends Component {
  logo = "./eye.png";
  qmark = "./qmark.png";

  styles = {
    layout: { display: "flex" },
    appBarLarge: { backgroundColor: "white" },
    titleLarge: {
      color: "rgb(100, 100, 100)"
    },
    appBarSmall: { backgroundColor: "rgb(255, 82, 0)" },
    titleSmall: {
      color: "white"
    },
    mainBackground: {
      backgroundColor: "rgb(230, 230, 230)",
      height: "100vh",
      width: "85vw"
    },
    sidebar: {
      width: "200px",
      backgroundColor: "rgb(34, 34, 34)",
      color: "white"
    },
    upperLeft: {
      height: "65px"
    },
    icon: {
      backgroundColor: "rgb(255, 82, 0)",
      height: "125px"
    },
    phoneMain: {
      backgroundColor: "rgb(34, 34, 34)",
      color: "white",
      height: "100vh"
    }
  };

  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div style={this.styles.layout}>
            <div style={this.styles.sidebar}>
              <div style={this.styles.upperLeft} />
              <div style={this.styles.icon}>
                <img src={this.logo} alt="" className="App-logo" />
                <Options />
              </div>
            </div>
            <div>
              <AppBar
                style={this.styles.appBarLarge}
                title={<span style={this.styles.titleLarge}>Robot Tester</span>}
                showMenuIconButton={false}
              />
              <div style={this.styles.mainBackground}>
                <GetPhoto />
                <Arti />
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <AppBar
            style={this.styles.appBarSmall}
            title={<span style={this.styles.titleSmall}>Robot Tester</span>}
            showMenuIconButton={false}
          />
          <div style={this.styles.phoneMain}>

          <Options />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
