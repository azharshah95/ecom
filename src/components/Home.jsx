import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Topics from "./Topics";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
