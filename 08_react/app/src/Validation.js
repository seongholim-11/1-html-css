import React, { Component } from "react";
import "./Validation.css";

export default class Validation extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  keyDown = (e) => {
    if(e.key === 'Enter'){
        this.handleButtonClick()
    }
  };

  render() {
    return (
      <div>
        <input type="password" defaultValue={this.state.password} onChange={this.handleChange} className={this.state.clicked ? (this.state.validated ? "success" : "failure") : null} onKeyDown={(e) => {this.keyDown(e)}}/>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
