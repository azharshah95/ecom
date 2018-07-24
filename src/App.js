import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
