import React, { Component } from "react";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
//BroswerRouter imported and used in index.js
class Routes extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} exact />
          <Route path="/postform" component={Postform} exact />
          <Route component={ErrorPage} exact />
        </Switch>
      </div>
    );
  }
}

export default Routes;
