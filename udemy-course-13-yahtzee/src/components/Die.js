import React, { Component } from "react";
import "../css/Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.props.handleClick(this.props.idx)
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;