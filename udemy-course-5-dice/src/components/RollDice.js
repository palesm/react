import React, {Component} from 'react';
import Die from "./Die";
import '../css/RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {dice1: 1, dice2: 1, message: 'Roll!', disabled: false}
    }
    generateRandInt = () => {
        return Math.floor(Math.random() * 6) + 1
    }
    roll = () => {
        this.setState({
            dice1: this.generateRandInt(),
            dice2: this.generateRandInt(),
            message: 'Rolling...',
            disabled: true
        })
        setTimeout(this.reset, 1000)
    }
    reset = () => {
        this.setState({
            message: 'Roll!',
            disabled: false
        })
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dice-container">
                    <Die number={this.state.dice1} isRolling={this.state.disabled}/>
                    <Die number={this.state.dice2} isRolling={this.state.disabled}/>
                </div>
                <button onClick={this.roll} disabled={this.state.disabled} className={this.state.disabled ? 'RollDice-button-disabled' : ''}>{this.state.message}</button>
            </div>
        );
    }
}

export default RollDice;