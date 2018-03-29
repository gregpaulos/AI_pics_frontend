import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Landing from "./components/Landing";


ReactDOM.render(
  <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/home" component={App}/>
            </div>
        </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
