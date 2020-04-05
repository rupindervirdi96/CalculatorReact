import React, { Component } from "react";
import Design from "./Design/design";
import "./App.css";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        {/* <div></div> */}
        <h1>CALCULATOR</h1>
        <div className="body">
          <Design />
        </div>
      </div>
    );
  }
}
