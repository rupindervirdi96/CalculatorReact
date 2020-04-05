import React, { Component } from "react";
import "./design.css";
import Button from "./button/button";

export default class design extends Component {
  state = {
    RegButtons: [
      "C",
      "()",
      "%",
      "/",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "00",
      "0",
      ".",
      "=",
    ],
    ScientificButtons: [],
    formula: "",
    calculation: "",
    result: "",
  };

  valueGetter = (e) => {
    return e;
  };

  clickHandler = (x) => {
    var value1 = 0;
    var value2 = 0;
    var result = 0;

    if (x == "+") {
      value1 = this.state.calculation;

      this.setState({ calculation: "" });
    } else if (x == "=") {
      value2 = this.state.calculation;
      console.log(value1);
      console.log(value2);
      result = parseInt(value1) + parseInt(value2);
      console.log(result);
      this.setState({ calculation: result });
    } else if (this.state.calculation.includes("C")) {
      this.setState({ calculation: "" });
    } else {
      this.setState((prevState) => ({
        calculation: prevState.calculation.concat(x),
        formula: prevState.formula.concat(x),
      }));
    }
  };
  // };

  render() {
    // console.log(this.state.formula);
    // console.log("Calc" + this.state.calculation);
    return (
      <div>
        <div className="display">
          <div className="userInput formula" type="text">
            {this.state.formula}
          </div>
          <div></div>
          <div className="userInput" type="text">
            {this.state.calculation}
          </div>
        </div>
        <div className="line"></div>
        <div className="buttons">
          {this.state.RegButtons.map((button, i) => (
            <Button
              value={button}
              key={i}
              onChange={(value) => {
                this.clickHandler(value);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
