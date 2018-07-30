import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { Route, Switch } from "react-router-dom";
//BroswerRouter imported and used in index.js
class Routes extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route component={ErrorPage} exact />
        </Switch>
      </div>
    );
  }
}

export default Routes;
