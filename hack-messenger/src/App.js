import "./App.css";
import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import Routes from "./Routes";
// import MessageView from "./components/MessageView";
// import HomePage from "./components/Homepage"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
