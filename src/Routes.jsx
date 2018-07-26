import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Topics from "./components/Topics";
import Topic from "./components/Topic";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Routes extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/about" component={About} exact />
            <Route path="/topics" component={Topics} exact />
            <Route path="/topics/:topicId" component={Topic} exact />
            <Route component={ErrorPage} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
