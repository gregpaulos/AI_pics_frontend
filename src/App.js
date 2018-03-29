import React, { Component } from "react";
import logo from "./logo.svg";
import Arti from "./components/Arti";
import GetPhoto from "./components/GetPhoto";
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">YO WIT REDUX!!!</h1>
        </header>
        <GetPhoto/>
        <Arti />
      </div>
    );
  }
}

export default App;
