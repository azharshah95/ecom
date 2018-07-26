import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
// import Topic from "./Topic";

class Topics extends Component {
  state = {};
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h3>Topics Page</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with react
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
        </ul>
        <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
      </div>
    );
  }
}
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
export default Topics;
