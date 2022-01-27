import React, { Component } from "react";
import "../css/Die.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from "@fortawesome/free-solid-svg-icons";


class Die extends Component {
  static icons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.props.handleClick(this.props.idx)
  }
  selectIcons = (number) => {
    return Die.icons[number - 1]
  }
  render() {
    let dieClass = this.props.locked ? 'Die-locked' : 'Die';
    return (
        <div className="" onClick={this.handleClick}>
          {this.props.val &&
              <FontAwesomeIcon className={dieClass} icon={this.selectIcons(this.props.val)} size="5x" color="white" />
          }
        </div>
    );
  }
}

export default Die;
