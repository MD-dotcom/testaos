import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import { Login } from "./components/Login.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Login} />

      </Router>
           
    );
  }
}
export default App;