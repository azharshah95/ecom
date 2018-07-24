import React, { Component } from "react";
import FormComponent from "./FormComponent";
class Body extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <FormComponent firstname="Azhar" lastname="Shah" />
      </div>
    );
  }
}

export default Body;
