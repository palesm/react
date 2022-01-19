import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from "@fortawesome/free-solid-svg-icons";
import '../css/Die.css'

class Die extends Component {
    static icons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    selectIcons = (number) => {
        return Die.icons[number - 1]
    }
    render() {
        const {number, isRolling} = this.props;
        let dieClass = isRolling ? 'Die shaking' : 'Die';
        return (
            <div>
                <FontAwesomeIcon className={dieClass} icon={this.selectIcons(number)} size="10x" />
            </div>
        );
    }
}

export default Die;