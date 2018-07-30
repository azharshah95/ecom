import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux";

import Posts from "./Posts";
import Postform from "./Postform";

import store from "./store";

class Home extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h3>Home Page</h3>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default Home;
