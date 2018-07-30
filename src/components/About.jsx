import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>About Page</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
