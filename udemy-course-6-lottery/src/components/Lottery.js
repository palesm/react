import React, {Component} from 'react';
import LottoBall from "./LottoBall";
import '../css/Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: "6os lotto",
        maxNum: 99,
        numBalls: 6
    }
    constructor(props) {
        super(props);
        this.state = { numbers: Array.from({length: this.props.numBalls})}
    }
    generateRandomNumbers = () => {
        return Math.floor(Math.random() * this.props.maxNum) + 1
    }
    handleClick = (e) => {
        this.drawLottery();
    }
    drawLottery = () => {
        this.setState(curState => ({
            numbers: curState.numbers.map(
                n => this.generateRandomNumbers()
            )
        }))

    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <div className="Lottery-ball-container">
                    { this.state.numbers.map(b => <LottoBall number={this.generateRandomNumbers()} />) }
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}

export default Lottery;
