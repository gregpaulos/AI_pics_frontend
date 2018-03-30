import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Options from "./components/Options";
import Intro from "./components/Intro";
import Random from "./components/Random/Random";
import "./App.css";
import MediaQuery from "react-responsive";
import { Route, Link } from "react-router-dom";
import logo from "./eye.png";

class App extends Component {
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
      width: "85vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    innerMain: {
      backgroundColor: "white",
      width: "75vw",
      height: "85vh",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      color: "rgb(100, 100, 100)"
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
              <Link to="/">
                <div style={this.styles.icon}>
                  <img src={logo} alt="" className="App-logo" />
                </div>
              </Link>
              <Options />
            </div>
            <div>
              <AppBar
                style={this.styles.appBarLarge}
                title={<span style={this.styles.titleLarge}>Robot Tester</span>}
                showMenuIconButton={false}
              />
              <div style={this.styles.mainBackground}>

              <div style={this.styles.innerMain}>
                <Route exact path="/home" component={Intro} />
                <Route path="/home/random" component={Random} />
              </div>

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
