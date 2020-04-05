import React, { Component } from "react";
import "./button.css";

export default class Button extends Component {
  state = {
    currentKeyValue: "",
  };

  render() {
    return (
      <div className="button">
        <div
          className="btnText"
          onClick={() => {
            this.props.onChange(this.props.value);

            // this.props.onclick();
          }}
        >
          {this.props.value}
        </div>
      </div>
    );
  }
}
