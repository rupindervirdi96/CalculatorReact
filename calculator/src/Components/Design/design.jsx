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
    ScientificButtons: ["SIN", "COS", "TAN", "COT", "COSEC", "SEC", "&radic"],
    formula: "",
    calculation: "",
  };

  clickHandler = (x) => {
    var values = [];
    var result = 0;
    switch (x) {
      case "+":
        this.setState((prevState) => ({
          formula: prevState.formula.concat(x),
        }));
        this.setState({ calculation: "" });
        break;
      case "-":
        this.setState((prevState) => ({
          formula: prevState.formula.concat(x),
        }));
        this.setState({ calculation: "" });
        break;
      case "x":
        this.setState((prevState) => ({
          formula: prevState.formula.concat(x),
        }));
        this.setState({ calculation: "" });
        break;
      case "/":
        this.setState((prevState) => ({
          formula: prevState.formula.concat(x),
        }));
        this.setState({ calculation: "" });
        break;
      case "=":
        // switch (operation) {
        // case "+":
        if (this.state.formula.includes("+")) {
          console.log("addition");
          values = this.state.formula.split("+");
          result = 0;
          values.forEach((value) => {
            result += parseInt(value);
          });
        }
        if (this.state.formula.includes("-")) {
          console.log("subtraction");
          values = this.state.formula.split("-");
          result = values[0];
          for (var x = 0; x < values.length - 1; x++) {
            result -= parseInt(values[x + 1]);
          }
        }
        if (this.state.formula.includes("x")) {
          console.log("multiply");
          values = this.state.formula.split("x");
          result = 1;
          values.forEach((value) => {
            result *= parseInt(value);
          });
        }
        if (this.state.formula.includes("/")) {
          console.log("division");
          values = this.state.formula.split("/");
          result = values[0];
          for (var x = 0; x < values.length - 1; x++) {
            result = result / parseInt(values[x + 1]);
          }
        }

        console.log(result);
        this.setState({ calculation: result.toString() });
        break;
      case "C":
        this.setState({ calculation: "", formula: "", result: 0 });
        break;
      default:
        this.setState((prevState) => ({
          formula: prevState.formula.concat(x),
          calculation: prevState.calculation.concat(x),
        }));
        break;
    }
  };

  render() {
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
