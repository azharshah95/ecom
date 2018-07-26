import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topic extends Component {
  state = {};
  render() {
    return (
      <div>
        <h6>{this.props.match.params.topicId}</h6>
        <Link to="/topics">
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    );
  }
}

export default Topic;
