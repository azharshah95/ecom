import React, { Component } from "react";
// import validate from "validate.js";
//import validator from "validator";

// var constraints = {
//   email: {
//     // Email is required
//     presence: true,
//     // and must be an email (duh)
//     email: true
//   }
// };

class FormComponent extends Component {
  state = {
    email: "",
    firstname: "",
    lastname: "",
    text: ""
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  onChangeFirstName = event => {
    this.setState({ firstname: event.target.value });
  };
  onChangeLastName = event => {
    this.setState({ lastname: event.target.value });
  };
  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // console.log(this.state.validation.email.test.length);
    alert(`${this.state.firstname} ${this.state.lastname}\n${this.state.text}`);
  };

  render() {
    return (
      <div>
        <h5>Form</h5>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">
            <span style={{ color: "red" }}>*</span>Email:
          </label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder=""
            onChange={this.onChangeEmail}
          />
          <span>{this.state.emailError}</span>
          <br />
          <label htmlFor="firstname">
            <span style={{ color: "red" }}>*</span>First name:
          </label>
          <br />
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            placeholder=""
            onChange={this.onChangeFirstName}
          />
          <br />
          <label htmlFor="lastname">
            <span style={{ color: "red" }}>*</span>Last name:
          </label>
          <br />
          <input
            type="name"
            name="lastname"
            value={this.state.lastname}
            placeholder=""
            onChange={this.onChangeLastName}
          />
          <br />
          <label htmlFor="text">Description:</label>
          <br />
          <textarea
            name="text"
            cols="50"
            rows="3"
            value={this.state.text}
            placeholder="Please enter some text"
            onChange={this.onChangeText}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default FormComponent;
